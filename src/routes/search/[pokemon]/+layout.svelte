<script>
    import { goto } from '$app/navigation'
    import { base } from '$app/paths'
    import { getPokemonByLetters } from '$lib/pokemonList.js'

    let search = ""

    let isSearchFocused;
    let autoComplete = [];

</script>
<main>
    <div class="head">
        <a id="home" href="{base}/search">Home</a>
        
        <form autocomplete="off" on:submit|preventDefault={()=> {search===""||search==null?alert("Sök efter en pokemon"):goto(base + '/search/'+ search.trim()); search = ""}}>
            <input class:focused={isSearchFocused&&search.trim()!=""?true:false} type="text" placeholder="Sök upp en pokemon" bind:value={search} on:input={() => {autoComplete = getPokemonByLetters(search); }} on:focusout={() => isSearchFocused=false} on:focus={() => isSearchFocused=true}/>
            <div class="autoComplete">
                <div class:invisible={search.trim()==""} class="autoComplete-list">
                    {#each autoComplete as p}
                        <a on:click={()=>search=""} class="autoComplete-option" href="{base}/search/{p}">{p}</a>
                    {/each}
                </div>
            </div>     
        </form>
    </div>

    <slot></slot>
</main>
<style>
    .head{
        background-image: url("https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960");
        background-size:cover;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
        gap: 8px;
        width: 100%;
        height: 60px;

        background-color: gray;
        padding: 8px 8px;

        border-radius: 10px 10px 0px 0px;


    }

    main{
        width: 100%;
        min-width: 300px;
    }

    #home{
        width: 20%;
        height: 100%;

        background-color: white;
        font-family: 'ethnocentric', sans-serif;
        border-radius: 4px;

        text-align: center;
        padding: 8px;

        transition: all 200ms ease-out;
    }

    #home:hover{
        background-color: darkgray;
        transform: scale(1);
    }

    input{
        transition: all 200ms ease-out; 
    }

    input:hover{
        box-shadow: 0px 0px 3px 1px black;
    }

    form{
        flex-grow: 1;
    }

    input{
        width: 100%;
        border-radius: 4px
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
        width: 78%;

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

</style>