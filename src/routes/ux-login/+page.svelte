<script>
    import { onMount } from "svelte";
	import { base } from '$app/paths';
    import { onNavigate } from "$app/navigation";
	import { goto } from "$app/navigation";
    

    let alphabets = "abcdefghijklmnopqrstuvwxyz¤".toUpperCase()
    let letters = []

    let usernameToWin = ""

    let userInput = ""
    let clicksToUnlock = 3

    let beepSound;
    let hasWon = false;

    let bombTrig = false

    let overlapRange = 20

    let isPlaying = false

    let isWaveHitting = false;

    function randomize(){
        isWaveHitting = true
        letters = []

        for (let letter of alphabets){
            let top = Math.random() * 90
            let left = Math.random() * 90

            let lett = {letter : letter, top : top, left: left, clicks : 0}

            letters.push(lett)
        }

        letters = letters

        setTimeout(() => {
            isWaveHitting = false
        }, 2000);
    }

    function addClick(index){
        letters[index].clicks += 1
        letters = letters

        let letter = letters[index].letter

        if (letters[index].clicks > clicksToUnlock){
            if(letter != "¤"){
                userInput += letter
                userInput = userInput
            }
            
        }
        else if(letters[index].clicks == clicksToUnlock){
            // If it is a bomb, blow up
            if (letter == "¤"){
                onBombPressed()
                return
            } 
        }

        if(userInput.toUpperCase() == usernameToWin.toUpperCase()){
            onWin()
        }
    }

    function onWin()
    {
        console.log("YOU WON")
        goto(base)
    }

    function onBombPressed()
    {
        console.log("BOMB!")
        userInput = ""
        bombTrig = true

        setTimeout(() => {
            bombTrig = false
        }, 3000);
    }

    let waveAnim;

    function onWaveHit(){
        let chance = Math.random();
        console.log(chance);
        chance > 0.5 ? randomize() : console.log("Lucky! You avoided the wave")
    }

    onMount(()=> {
        randomize();
        beepSound = document.getElementById("beepSound")

        setInterval(() => {
            onWaveHit()
        }, 30000
    );
    })


    
</script>

<div class="register" style="display : {isPlaying ? "none" : "inline"};">
    <h1>Register, please :)</h1>
    <form on:submit|preventDefault={()=> {
        if(usernameToWin != ""){
            isPlaying = true;
        }
        else{
            alert("Enter username please :)")
        }
        }}>
        <label for="username">Username</label>
        <input type="text" name="username" id="username" bind:value={usernameToWin}>
        
        <label for="password">Passoword</label>
        <input type="password" name="password" id="password">

        <input type="submit">
    </form>
</div>

<main style="display : {isPlaying == true ? "flex" : "none"};">
    <h1>Please login now :)</h1>
    <h1>If you did not already know, your username is : {usernameToWin}</h1>
    <p>Find the letters! Watchout for the wave!</p>
    <p style="width: 400px; height: 30px; background-color: white; padding: 5px;">Username : {userInput}</p>
    <div class={bombTrig == true ? "bombUI" : "hidden"}>
        <h1>
            Unlucky! You triggered a bomb! All characters reset
        </h1>
    </div>
    <div class="container">
        <div class="megaWave" style="display: {isWaveHitting ? "inline" : "none"}">
            <img  style="image-rendering: auto; width:100%; top: 600px; position: relative;" src="{base}/images/wave.png" alt="wave"/>
        </div>
        <div class="waveContainer" style="background-color: #004a9b;">
            <div class="wave">
                <img id="waveImage" style="image-rendering: auto;" src="{base}/images/wave.png" alt="wave"/>
            </div>
        </div>

        <div class="shore">
            <section>
                <audio id="beepSound">
                    <source src="{base}/sounds/beep.wav">
                    No Support for audio
                </audio>

                {#each letters as {letter, top, left, clicks}, i}
                    <button on:focus on:mouseover={() => {beepSound.currentTime = 0; beepSound.play()}} class={clicks <= 0 ? "letter" : (clicks < 3) ? "hole" : "visible"} class:bomb={letter == "¤"} on:click={() => addClick(i)} style="outline-style: none;cursor: default;position: absolute; width: 30px; height: 30px; top: {top}%; left : {left}%">
                        {letter}
                        <div class={clicks > 0 ? "" : "hidden"}>
                            <img src = "{base}/images/hole.png" alt="hole">
                        </div>
                    </button>
                {/each}
            </section>
        </div>

        
    </div>

    <div>
        <h2>Unwanted Letter? Remove <button on:click={()=> {userInput = userInput.slice(0, -1)
            ;userInput=userInput}}>it</button> <span style="color: blue; font-style:italic; text-decoration:underline">here</span></h2>
    </div>
</main>

<style>
    main{
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: relative;

        overflow: hidden;

        border-radius: 20px;
    }

    h1{
        font-size: 32px;
        margin-bottom: 10px;
    }
    .hidden{
        display: none;
    }

    .register{
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    .container{
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;

        flex-direction: column;

        width: 500px;
        background-color: rebeccapurple;

        height: 500px;
        overflow: hidden;

        border-radius: 20px;
        border-width: 10px;
        border-color: white;

        margin: 20px;
    }

    .letter{
        background: transparent;
        font-size: 0px;

        border-radius: 50%;

        position: relative;
    }

    .letter div{
        position: absolute;
        width: 50px;
        height: 50px;

        top: 43%;
        left : 48%;

        transform: translate(-50%, -50%);

    }

    .letter div img{
        width: 100%;
        height: 100%;

        z-index: -1;
    }

    .bomb{
        font-size: 0px;
        background-color: cyan;
    }

    .hole{
        font-size: 0px;
    }

    .hole div{
        position: absolute;
        width: 50px;
        height: 50px;

        top: 43%;
        left : 48%;

        transform: translate(-50%, -50%);
    }

    .hole div img{
        width: 100%;
        height: 100%;
    }
    
    .visible{
        color: white;
        font-size: 24px;
    }

    .visible div{
        position: absolute;
        width: 50px;
        height: 50px;

        top: 43%;
        left : 48%;

        transform: translate(-50%, -50%);

        z-index: -1;

    }

    .visible div img{
        width: 100%;
        height: 100%;

        z-index: inherit;
    }

    section{
        position: relative;
        width: 100%;
        height: 90%;
        bottom: 0px;
        margin-top: 50px;
        
        image-rendering:auto;

        z-index: 99;
    }

    .shore{
        width: 100%;
        height: 100%;
        background-image: url("/images/sand.jpg");  
    }

    .wave{
        height: 100px;
        width: 100%;
        position: relative;

        z-index: 1;
    }

    .wave img{
        animation: wave 10000ms ease-in-out infinite;
        height: 300px;
        width: 100%;
        position: absolute;
    }

    .waveContainer{
        width: 100%;
        top: 0;
    }

    .megaWave{
        width: 100%;
        height: 1000px;

        background-color: #004a9b;

        position: absolute;
        bottom: 1000px;

        animation: megaWave 3000ms ease-in-out;
        z-index: 100;

    }

    @keyframes megaWave{
        0%{
            bottom: 100%;
        }
        100% {
            bottom: -10000px;
        }

    }

    @keyframes wave{
        0%{
            top: 10px;
        }
        50% {
            top : 40px;
        }
        100%{
            top: 10px;
        }
    }
</style>