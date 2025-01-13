<form on:submit|preventDefault={()=> goto("search/"+ search)} >
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>


<script>
    export let search;

    import { goto } from '$app/navigation';
</script>