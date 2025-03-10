<script>
    let array = Array(7)

    let length = 1;

    let arrayRand= []
    
</script>

<p>Öka rutor</p>
<input type="number" bind:value={length} max="7" min="0">
<main>
    {#each Array(length) as element, i}
        <ol>
            <li>
                {#each Array(i) as _, j}
                    <p>x={Math.floor(Math.random())}</p>
                {/each}
            </li>
        </ol>
    {/each}
</main>

<style>
    input{
       
    }

    main{
        width: 60vw;
        height: 70vh;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);


        display: grid;
        grid-template-rows: repeat(4, 1fr);
        
        row-gap: 1em;
        column-gap: 1em;
    }
    

    main ol{
        list-style-type: circle;
        list-style-position: inside;
        background-color: red;
        
    }

    main ol:active{
        border-width: 4px;
        border-style: dotted;
    }

    main ol:nth-child(n+2){
        grid-row-start: 2;
        grid-row-end: 4;
    }
    main ol:nth-child(n+5){
        grid-row-start: 5;
        grid-row-end: 4;
        
    }

    @media(max-width: 900px){
        main ol:nth-child(1){
            grid-column-start: 1;
            grid-column-end: 3
        }


        main ol{
            grid-template-columns: repeat(2, 1fr);
        }

        main ol:nth-child(n+4){
            grid-row-start: 5;
            grid-row-end: 4;
        }

        main ol:nth-child(n+6){
            grid-row-start: 6;
            grid-row-end: 5;
        }
        
    }
    
    @media(min-width: 900px)
    {
        main{
            background-color: rebeccapurple;
        }
        main ol{
            grid-template-columns: repeat(3, 1fr);
        }

        main ol:nth-child(1){
            grid-row-start: 0;
            grid-column-start:1;
            grid-column-end: 4;
        }
    }


</style>