<script>
    let cards = [];
    let flippedCards = [];

    let images = ["memory/circle.png","memory/circle2.png","memory/sqaure.png","memory/sqaure2.png","memory/star.png","memory/star2.png"]

    let greenPoints = 0;
    let redPoints = 0;

    let winner = greenPoints>redPoints?"GREEN":"RED";

    let winCondition = false;
    let blueTurn = true;

    createCards()

    // Hittades på nätet, Fisher-Yates Shuffle
    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
  }
}

    function restartGame()
    {
        winCondition = false;
        // Reset points
        greenPoints, redPoints = 0,0
        flippedCards, cards = [],[];

        createCards();
        
        blueTurn = true;
    }

    function createCards()
    {
        for(let i=0; i<images.length; i++){
            cards.push({id : i, flipped : false, complete : false, image : images[i]});
            cards.push({id : i, flipped : false, complete : false, image : images[i]});
        }

        shuffle(cards);

        cards = cards;
    }

    function endGame(){
        winCondition = true;
        winCondition = winCondition

        if(greenPoints > redPoints){
            winner = "GREEN"
        }
        else if(greenPoints < redPoints)
        {
            winner = "RED"
        }
        else{
            winner = "NO ONE"
        }

        winner = winner
    }

    function resetCards()
    {
        setTimeout(() => {
            cards.forEach((card) => {
                card.flipped = card.complete;
            });
            flippedCards = [];
            cards = cards;

            // check for win condition
            let completeCards = 0;

            cards.forEach(card => {
                if(card.complete === true)
                {
                    completeCards ++;
                }
            }
            );

            if(completeCards == cards.length){
                endGame();
            }

        }, 1000);
    }

    function flipCard(card){
        if (flippedCards.length < 2 && card.flipped === false){

            card.flipped = true;
            flippedCards.push(card);

            cards = cards;

            if(flippedCards.length === 2){
                let firstFlip = flippedCards[0];
                
                if(card.id === firstFlip.id){
                    firstFlip.complete = true;
                    card.complete = true;
                    cards = cards

                    blueTurn?greenPoints++:redPoints++;
                    console.log("POINT AWARDED");
                }

                else
                {
                    console.log("MISMATCH NO POINT");
                    blueTurn = !blueTurn;
                    console.log("TURNS CHANGED");
                }

                cards = cards;
                
                resetCards();
            }            
        }
    };

</script>

<h1>Memory</h1>

<aside class="turn" class:blue={blueTurn}></aside>

<aside><p>{redPoints}</p></aside>
<aside class="blue"><p>{greenPoints}</p></aside>

<button id="restart" on:click={restartGame}>Restart</button>

<main>  
    {#each cards as card}
        <button on:click={flipCard(card)} class="card" class:flipped={card.flipped}>
            <img class="front" src={card.image} draggable="false" alt="memoryCard">
            <img class="back" src="favicon.png" draggable="false" alt="memoryCard">
        </button>
    {/each} 
</main>

<div class="winDisplay" class:winner={winCondition}>
    <h2>
        The winner is {winner}
    </h2>
</div>

<style>
    h1{
        margin: auto;
        text-align: center;
    }

    main{
        display: grid;
        grid-template-rows: repeat(3, 100px);
        grid-template-columns: repeat(4, 100px);
        
        position: absolute;
        margin: 0;
        top: 50%;
        left: 50%;

        row-gap: 10px;
        column-gap: 10px;
        
        transform: translate(-50%, -50%);
        
    }
    
    @media (min-height: 500px){
        main{
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(3, 100px);
        }
    }
    @media (max-height: 500px){
        main{
            grid-template-columns: repeat(6, 100px);
            grid-template-rows: repeat(2, 100px);
        }
    }

    .winner{
        display: block;
        left: 0;
    }

    .winDisplay{
        width: 100vw;
        background-color: #1900FF;
        color: white;

        font-family: 'ethnocentric';

        text-align: center;

        font-size: xx-large;

        margin: auto;

        position: relative;
        top:5vh;

        padding: 10px;

        right: -100%;
    }

    .card{
        outline-width: 2px;
        outline-color: #0b006f;
        outline-style: solid;
        
        width: 100%;
        height: 100%;

        background-color: #1900FF;
        box-shadow: 0px 0px 2px 2px rgb(71, 71, 71);

        position: relative;

        transition: all 500ms ease-out;

        border-radius: 20px;
    }

    .card:not(.flipped):hover{
        transform: scale(1.1);
    }

    .card img{
        position: absolute;
        top : 0;

        padding: 10px;

        backface-visibility: hidden;
        transform-style: preserve-3d;

        transition: transform 200ms ease-in-out;
    }

    .front{
        transform: rotateY(180deg);
        transition: all 200ms ;
    }


    .flipped{
        transform: rotateY(180deg);
        transform-style: preserve-3d;

        background-color: white;

        transition: all 500ms ease-in-out;
    }

    aside{
        width: 100px;
        height: 100px;

        position: fixed;
        bottom: 10px;
        right: 10px;

        background-color: #ff0066;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 15px;
        border-color: #860036;
        border-width: 4px;
        
        color: white;

        font-family: 'ethnocentric';
    } 
    
    .blue{
        background-color: #00FF99;
        border-color: #008751;
        left : 10px;
    }

    .turn{
        box-shadow: 0 0 10px 10px yellowgreen;
    }

    #restart{
        position: fixed;
        margin: auto;
        bottom: 2vh;
        left: 50%;

        transform: translateX(-50%);

        background-color: #1900FF;
        box-shadow: 0px 0px 5px 5px gray;

        font-family: 'ethnocentric';
        color: white;
        font-size: 164%;

        padding: 15px;
        
        border-radius: 15px;

        transition: all 200ms ease-in-out;
    }

    #restart:hover{
        filter: invert(100%);
    }

    #restart:active{
        filter: grayscale();
    }

    p{
        font-size: 30px;
    }

    h1{
        font-size: 64px;
        font-family: 'ethnocentric';
        text-shadow: 4px 4px #0d0081;
        color:#1900FF;

        margin-top: 5vh;
    }
                          
</style>