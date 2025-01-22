<script>
    import { base } from '$app/paths';
    import {search_store} from '$lib/user';
    import { onMount } from 'svelte';
    import { afterNavigate } from '$app/navigation';
    import { goto } from '$app/navigation';

    console.log(base)
    let search;

    let latestSearches = []

	onMount(() => { 
		latestSearches = $search_store.length>2?JSON.parse($search_store):[];
        latestSearches = latestSearches
	});

    afterNavigate(() => 
    {   
        latestSearches = $search_store.length>2?JSON.parse($search_store):[];
        latestSearches = latestSearches
    })

 
</script>

<div class="backdrop"></div>

<main>
    <slot>
    </slot>
</main>

<footer>Recent Searches :
    {#each latestSearches as s}
        <a style="background-color: {s.color};" id="prev_search" href={s.link}>{s.name.toUpperCase()}</a>
    {/each}
</footer>

<style>
    main{
        width: 60vw;
        height: fit-content;

        background-color: rgb(255,255,255,0.8);

        margin: auto;

        display: flex;

        align-items: center;

        flex-direction: column;

        position: relative;
    }

    slot{
        background-color: white;
        height: 100%
    }

    footer{
        color: black;

        width: 100vw;
        height:100px;

        display: flex;
        align-items: center;
        justify-content: center;


        position: relative;
        bottom: 0;

        
    }

    .backdrop{
        width: 100vw;
        height: 100vh;
        
        background-image: url("https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960");
        background-size: cover;
        background-color: rebeccapurple;

        position: fixed;
        top:0;
        left:0;

        z-index: -1;
        filter: blur(5px);

    }

    #prev_search{
        margin: 4px;
    }

    a{
        padding: 5px; 
        border-radius: 15px; 
        text-align:center; 

        transition: transform 200ms ease-out;

        color: white;

        font-size: 16px;
        font-family: 'ethnocentric';
        
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    a:hover{
        transform: scale(1.1);
    }
</style>