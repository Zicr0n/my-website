<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';

    import {pokemonList} from '$lib/pokemonList.js';
    import {getPokemonByLetters} from '$lib/pokemonList.js';
	import { isHttpError } from '@sveltejs/kit';

    function RandomPokemon()
    {
        let index = Math.floor(Math.random() * 1025) + 1;
        goto( base + "search/"+ index)

    }

    let isPikachuVisible = false;
    let isShaken = false;

    function onLogoClick()
    {
        if (isShaken)
            return;
        
        isShaken = true;

        let element = document.getElementById("logo");
        element.animate([
            {transform: 'rotateZ(0deg)'},
            {transform: 'rotateZ(6deg)'},
            {transform: 'rotateZ(-6deg)'},
            {transform: 'rotateZ(0deg)'}
        ], {
            duration: 500,
            easing: 'cubic-bezier(.19,1,.42,1.19)',
            iterations: 1
        });

        setTimeout(() => {
            isShaken = false;
            document.getElementsByClassName("popUp")[0].classList.remove("popUp");
            document.getElementsByClassName("popUp")[0].classList.add("pikachu");
        }, 2000);

    }

    let autoComplete = []

    let search = "";
    let isSearchFocused = false;
</script>

<main>
    <div class="backdrop"></div>

    <div class="content">
        <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="position: relative;">
                <button id ="logo" on:click={onLogoClick}>
                    <img src = "images/pokeball.png" alt="Pokemon Logo">
                </button>
                <img class:popUp={isShaken} class="pikachu" src = "images/pikachu.png" alt="Pikachu Hiding">
            </div>
            <h1>Pokedex</h1>
        </div>

        <div class="search">               
            <form autocomplete="off" on:submit|preventDefault={()=> search===""||search==null?alert("Sök efter en pokemon"):goto(base + '/search/'+ search.trim())}>
                <input class:focused={isSearchFocused&&search.trim()!=""?true:false} type="text" placeholder="Sök upp en pokemon" bind:value={search} on:input={() => {autoComplete = getPokemonByLetters(search); }} on:focusout={() => isSearchFocused=false} on:focus={() => isSearchFocused=true}/>
                <div class="autoComplete">
                    <div class:invisible={search.trim()==""} class="autoComplete-list">
                        {#each autoComplete as p}
                            <a class="autoComplete-option" href="{base}/search/{p}">{p}</a>
                        {/each}
                    </div>
                </div>     
            </form> 


            <div style="display: flex; align-items: center;">
                <button class="navButton" on:click={search===""||search==null?alert("Sök efter en pokemon"):goto(base + '/search/'+ search)}>Sök</button>
                <button class="navButton" on:click={RandomPokemon}>Överraska Mig!</button>
            </div>
        </div>

        
    </div>
    

</main>

<style>
    main{
        width: 100%;
        height: 80vh;

        z-index: 0;
    }

    .backdrop{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: cover;
        background-image: url("https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960");
        filter: blur(5px);
    }

    .content{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        row-gap: 20px;
        flex-direction: column;
        
        z-index: 2;

        width: 100%;
        height: 100%;
    }

    .search{
        width: 100%;
        max-height: 300px;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        position: relative;
    }

    .autoComplete{
        width: 100%;
        max-height: 200px;

        background-color: white;

        overflow-y: scroll;
        scrollbar-width: thin;
        scrollbar-color: #ff0066 white;
    }

    .autoComplete-list{
        position: absolute;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        right: 0;
        left: 5%;

        width: 90%;

        max-height: 200px;
        overflow-y: scroll;
    }
    
    .autoComplete-option{
        padding: 4px;
        background-color: white;
        color: black;
        text-decoration: none;

        z-index: 99;
        width: 100%;
    }

    .autoComplete-option:hover{
        background-color: gainsboro;
        color: white;
    }


    @keyframes shake{
        0%{
            transform: rotateZ(0deg);
        }
        25%{
            transform: rotateZ(7deg);
        }
        50%{
            transform: rotateZ(-7deg);
        }
        100%{
            transform: rotateZ(0deg);
        }
    }

    .pikachu{
        width: 100px;
        height: 100px;
        z-index: -1;

        position: absolute;
        top: 0;
        left: 50%;

        transform: translateX(-50%) translateY(-7%);
        transition: transform 1000ms ease-out;
    }

    #logo{
        animation: tiltBackAnim 100ms cubic-bezier(0,1,.44,1.27);
    }
    #logo:hover{
        animation: tiltAnim 500ms cubic-bezier(0,1,.44,1.27);
    }
    
    .popUp{
        width: 100px;
        height: 100px;
        z-index: -1;
        
        position: absolute;
        top: 0;
        left: 50%;
        
        transform: translateX(-50%) translateY(-63%);
        transition: transform 1000ms ease-out;
    }

    h1{
        color: white;
        font-family: 'ethnocentric';

        font-size: 36px;
        text-align: center;

        margin: 20px;

        animation: tiltBackAnim 200ms cubic-bezier(0,1,.44,1.27);

        text-shadow: 2px 2px darkgray;
        
    }

    h1:hover{
        animation: tiltAnim 500ms cubic-bezier(0,1,.44,1.27);
    }

    img{
        width: 200px;
        height: 200px;
    }

    input{
        width: 100%;
        border-radius: 20px;

        outline: none;
        border: none;
        border-color: #ff0066;
    }

    input:hover{
        box-shadow: 0px 0px 3px 1px black;
    
    }

    .focused{
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;

        border-bottom-width: 0px;
    }

    form{
        width: 90%;
    }

    .navButton{
        min-width: 120px;
        height: 40px;

        margin: 20px 4px 4px 4px;

        border-radius: 4px;
        
        background-color: white;
        
        animation: tiltBackAnim 200ms cubic-bezier(0,1,.44,1.27);
    }

    .navButton:hover{
        transform: rotateZ(-5deg);
        animation: tiltAnim 500ms cubic-bezier(0,1,.44,1.27);
    }

    .navButton:active{
        transform: scale(0.9)
    }
    @keyframes tiltAnim{
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(-3deg);
        }
    }
    @keyframes tiltBackAnim{
        0%{
            transform: rotateZ(-3deg);
        }
        100%{
            transform: rotateZ(0deg);
        }
    }

</style>