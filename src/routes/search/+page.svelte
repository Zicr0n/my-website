
<input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
<button on:click={seek}>Click to search</button>


<script>
    let search;

    import { goto } from '$app/navigation';

    function seek() {
        goto(`/search/${search}`);
    }
</script>