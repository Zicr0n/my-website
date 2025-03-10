<!-- 
 ______     __     ______     ______     ______     __   __    
/\___  \   /\ \   /\  ___\   /\  == \   /\  __ \   /\ "-.\ \   
\/_/  /__  \ \ \  \ \ \____  \ \  __<   \ \ \/\ \  \ \ \-.  \  
  /\_____\  \ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_\\"\_\ 
  \/_____/   \/_/   \/_____/   \/_/ /_/   \/_____/   \/_/ \/_/  12/02/2025
                                                               
-->

<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths"
    import { score_store } from "$lib/user.js"
    const WORDLIST = ["if", "else", "function", "let", "var","hypotes", "for", "array","number", "import","from", "const", "p", "div","slot", "article", "tag", "main", "style", "script", "ul", "li", "ol", "background-color", "color", "margin", "padding", "width", "height", "display", "flex", "grid", "inline", "block", "justify-content", "align-items", "gap"]
    let spawnedWords = []

    // Game Loop
    let delta = 0
    let startTime = Date.now()

    // Constants
    const canvasHeight = 750 // Pixels
    const canvasWidth = 500 // Pixels
    const startFallingSpeed = 100 // px per second
    const maxLives = 3

    // Variables
    let lives = maxLives
    let fallingSpeed = startFallingSpeed
    let fallSpeedRandom = 50

    let wrongLetterSound = null;
    let wordCompleteSound = null;
    let goldenWordSound = null;

    let highScore = 0

    let score = 0;

    let state = "start"

    let interval = null

    const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
       

        let timeout;

        /// KODEN ÄR FRÅN STACKOVERFLOW https://stackoverflow.com/questions/6962658/randomize-setinterval-how-to-rewrite-same-random-after-random-interval \\\
        const runInterval = () => {
            const timeoutFunction = () => {
            intervalFunction();
            runInterval();
            };

            const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

            timeout = setTimeout(timeoutFunction, delay);
        };

        runInterval();

        return {
            clear() { clearTimeout(timeout) },
        };
    };
    /////\\\\\\\

    function SpawnWord(){
        let randomWord = ChooseRandomFromList(WORDLIST)

        spawnedWords.push({word : randomWord, lettersLeft: randomWord, top : 0, left: Math.random() * 90, speed : fallingSpeed + Math.random()*fallSpeedRandom, isGold : (Math.random() > 0.5)?true:false, isUseless : false})

        spawnedWords = spawnedWords
    }

    function ChooseRandomFromList(list){
        return list[Math.floor((Math.random() * (list.length)))]
    }

    
    onMount(()=>{
        wrongLetterSound = document.getElementById("wrongAudio")
        wordCompleteSound = document.getElementById("wordComplete")
        goldenWordSound = document.getElementById("goldenWordSound")
        
        highScore = $score_store.length>0?JSON.parse($score_store):0;
        
        Update()
    })
    
    function StartGame()
    {
        interval = setRandomInterval(()=> SpawnWord(), 1000, 2000)
        changeState("running")
        score = 0;
        Update()
    }
    
    function changeState(newState){
        state = newState
        state = state
    }
    
    function onKeyDown(e){
        
        let key = e.key
        
        if(key.length > 1){
            return
        }
        
        let currentWord = spawnedWords[0]
        let remainingLetters = currentWord?.lettersLeft
        
        if(remainingLetters == null)
        {
            return
        }
        
        if (key === remainingLetters[0])
        {   
            remainingLetters = remainingLetters.slice(1)
            spawnedWords[0].lettersLeft = remainingLetters
            
            spawnedWords = spawnedWords
            console.log("CORRECT")
            
            if(remainingLetters.length == 0){
                console.log("WORD COMPLETE")
                spawnedWords.shift()
                
                score += currentWord.word.length * (currentWord.isGold? 2: 1)
                
                if(currentWord.isGold){
                    GetALifeDude()
                }
                else{
                    wordCompleteSound.currentTime =0
                    wordCompleteSound.play()
                }
            }
        }
        
        else{
            console.log("Wrong LETTER")
            onWordReachedBottom()
        }
        
        spawnedWords = spawnedWords
    }
    
    function GetALifeDude()
    {
        
        goldenWordSound.currentTime = 0
        goldenWordSound.play()
        
        if (lives >= maxLives){
            return
        }
        
        lives += 1
    }
    
    function onWordReachedBottom(){
        lives = lives - 1
        wrongLetterSound.currentTime = 0
        wrongLetterSound.play()
        
        console.log("A WORD REACHED BOTTOm")
        
        if(lives <= 0)
        {
            endGame()
        }
    }
    
    function restartGame()
    {
        spawnedWords = []
        lives = maxLives
        
        spawnedWords = spawnedWords
        StartGame()
        
        changeState("running")
    }
    
    function endGame()
    {
        interval.clear()
        
        changeState("end")
        
        if(highScore < score){
            highScore = score
        }

        $score_store = JSON.stringify(highScore)
    }
    
    function Update(){
        if (state != "running")
        {
            return
        }
        
        // Calculate time since last frame
        let now = Date.now()
        delta = now - startTime;
        startTime = now
        
        let FPS = Math.floor(1000/delta)
        
        // Basic time function complete, now to game functionality
        // First, for each word add to "top"
        for (let word of spawnedWords){
            const index = spawnedWords.indexOf(word)
            word.top += word.speed * delta / 1000;
            
            if(word.top >= canvasHeight){
                spawnedWords.splice(index, 1)
                onWordReachedBottom()
            }
        }
        
        spawnedWords = spawnedWords
        
        requestAnimationFrame(Update)
    }
</script>

<div class="hidden" class:start-screen={state == "start"}>
    <h1 class="h1">Keyboard Game</h1>
    <h3 class="h3">Highscore : {highScore}</h3>
    <button class="start" on:click={StartGame}>Start Game</button>
</div>

<div class="hidden" class:lose-screen={state == "end"}>
    <h1 class="h1 bg-surface-50">You lost!</h1>
    <h3 class="h3">Highscore : {highScore}</h3>
    <button class="retry"  on:click={()=>{restartGame(); console.log("Restart")}}>Retry Game</button>
</div>

<main>
    <div class="main-wrapper">
        
        <audio id="wrongAudio"><source src="{base}/sounds/wrong-letter.mp3" type="audio/mp3"></audio>
            <audio id="goldenWordSound"><source src="{base}/sounds/golden-letter.mp3" type="audio/mp3"></audio>
                <audio id="wordComplete"><source src="{base}/sounds/word-complete.mp3" type="audio/mp3"></audio>
                    
    <div class="wordContainer" style="height: {canvasHeight}px; width:{canvasWidth}px">
        <div class="life-display">
            {#each {length: lives > 0 ? lives : 0} as w, i}
                <div>❤️</div>
            {/each}
            <p class="score">Score : {score}</p>
        </div>

        {#each spawnedWords as {word, lettersLeft, top, left, isGold}, i}
            <p class="word" style="top:{top}px; position:absolute; left: {left}%; color : {isGold?"yellow":"#0aff52; text-wrap: nowrap;"} ">
                <!-- If it is the first letter, put an underline under it. If it is unwritten letters, put the remainingLettersClass on it. For written letters, do nothing-->
                {#if i == 0}
                    {#if lettersLeft.length > 0}
                        {word.replace(lettersLeft, "")}<span class="firstLetter">{lettersLeft[0]}</span><span class="remainingLetters">{lettersLeft.slice(1)}</span>
                    {:else}
                        {word}
                    {/if}
                {/if} 

                {#if i != 0}
                    {word}
                {/if}
            </p>
        {/each}
    </div>
    <button class="reset-high" on:click={()=> {highScore = 0; $score_store= JSON.stringify(highScore)}}>Reset Highscore</button>
    <button class="end-game" on:click={()=> {endGame()}}>End Game</button>
</div>
</main>

<svelte:window on:keydown={onKeyDown} />

<style>
    main{
        width: 100%;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .main-wrapper{
        display: inline;
        justify-content: center;
        align-items: flex-end
    }

    .wordContainer{
        background: rgb(0,4,98);
        background: radial-gradient(circle, rgba(0,4,98,1) 0%, rgba(0,1,47,1) 100%);

        padding: 20px;
        position: relative;

        border-radius: 20px;
        border-color: gray;
        border-width: 10px;
    }

    .word{
        color: #0aff52;
        font-family: 'Red';
        font-size: 32px;

        text-shadow: #009d4a 2px 2px 0px;
    }
    .firstLetter{
        text-decoration: underline;
    }
    .remainingLetters{
        background-color: #009d4a;
    }

    .life-display{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

    }
    .reset-high{
        padding: 10px;
        background-color: red;
        margin: 5px;
    }
    .retry{
        width: 100px;
        height: 30px;

        background-color: red;

        cursor:grabbing;
    }
    .start{
        background-color: #0aff52;
        padding: 10px;
        margin: 4px;

        border-radius: 10px;

    }
    .start-screen{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        width: 100vw;
        height: 225px;

        background-color: #009d4a;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        z-index: 4;
    }

    .lose-screen{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        width: 100vw;
        height: 225px;
        background-color: red;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        z-index: 3;
    }

    .score{
        color: white;
        text-align: center;
    }
</style>