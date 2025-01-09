<form on:submit|preventDefault={()=> goto('/search/'+search)}>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>


<script>
    let search = ' nig';

    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
</script>