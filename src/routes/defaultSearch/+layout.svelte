
<div class="backdrop"></div>
<main>
    <slot></slot>
</main>

<script>
    import {base} from '$app/paths'
    console.log(base)
</script>

<style>
    main{
        width: 80vw;
        height: 100vh;

        background-color: rebeccapurple;

        margin: 5vh auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .backdrop{
        width: 100vw;
        height: 100vh;
        
        background-image: url("https://imageio.forbes.com/specials-images/imageserve/604202ff091b6539cb90fcbc/The-backs-of-a-number-of-Pok-mon-cards-/960x0.jpg?format=jpg&width=960");
        background-size: cover;

        position: fixed;
        top: 0;
        left: 0;

        z-index: -1;

        filter: blur(5px);
    }

</style>
