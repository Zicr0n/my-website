
import { error } from '@sveltejs/kit';

/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = true;

async function fetchData(url, fetch){
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc. 
    });

    // check for error
    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }

    console.log("After error")

    let data = await response.json(); // parses JSON response into native JavaScript objects

    return data
}

async function GetEvolutionTree(chainLink, fetch){
    let chainLinks = []
    let currentChainLink = chainLink

    console.log("Looping Initiated")

    console.log(currentChainLink)
    
    let fetchedPokemon = await GrabPokemonFromEvolution(currentChainLink, fetch)

    if (fetchedPokemon != null){
        chainLinks.push(fetchedPokemon)
    }

    while (true)
    {
        if(currentChainLink.evolves_to.length != 0)
        {
            for(let index in currentChainLink.evolves_to)
            {   
                let poke = await GrabPokemonFromEvolution(currentChainLink.evolves_to[index], fetch)
                if(poke != null)
                    chainLinks.push(poke)
            }

            currentChainLink = currentChainLink.evolves_to[0]
        }
        else
        {
            break
        }
    }

    console.log(chainLinks)

    return chainLinks
}

async function GrabPokemonFromEvolution(chainLink, fetch){
    console.log(chainLink.species.name)

    // Link looks like this "https://pokeapi.co/api/v2/pokemon-species/711/"
    // So we need to remove the last / and grab the number
    let id = chainLink.species.url.split("/")[6]
    console.log("ID : " + id)

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc. 
    });

    let data = null;

    // check for error
    if (response.status == 200) {
        data = await response.json(); // parses JSON response into native JavaScript objects
    }

    return data
}

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
    /* params.pokemon matches to the [pokemon] in the filesystem */
    /* for example navigating to /search/pikachu in this example will put pikachu in params.pokemon */
    console.log(params.pokemon);
    let pokemon = params.pokemon.toLowerCase();

    // Create list for API calls
    let fetches = ['https://pokeapi.co/api/v2/pokemon/'+ pokemon, 'https://pokeapi.co/api/v2/pokemon-species/'+ pokemon]
    let respones = []

    console.log("About to fetch POKEMON")

    // Run through each one, GET each
    let url = fetches[0]
    const pokeFetch = await fetchData(url, fetch); // parses JSON response into native JavaScript objects

    // Add respones
    respones.push(pokeFetch)

    let id = pokeFetch.species.url.split("/")[6]
    const speciesFetch = await fetchData('https://pokeapi.co/api/v2/pokemon-species/' + id, fetch); // parses JSON response into native JavaScript objects
    respones.push(speciesFetch)

    console.log("Pokemon fetched")

    // Pokemon and pokemon-species fetched, now fetch the pokemon's abilities
    console.log("About to fetch ABILITIES")
    let abilities = []

    for(let index in respones[0].abilities)
    {
        let entry = respones[0].abilities
        let url = entry[index].ability.url

        const data = await fetchData(url, fetch)

        abilities.push(data)
    }
    
    respones.push(abilities)
    console.log("Abilities fetched")

    console.log("About to fetch evolution chain")
    
    // Now fetch the evolution chain of the pokemon, and each pokemon.
    let evoChain = await fetchData(respones[1].evolution_chain.url, fetch)
    console.log("Chain of evo")
    console.log(evoChain)
    console.log("evolution chain fetched")

    /* Data structure :
    respones[3] -> .chain -> .species ==> the base evolution I.E baby
    respones[3] -> chain -> evolves_to[0] -> .species ==> the next evolution
    respones[3] -> chain -> evolves_to[0] -> evolves_to[0] -> .species ==> evolution after

    each one of the evolves_to[0] has a species array, which can be used to retrieve the pokemon name
    thus, able to retrieve an the sprite of the pokemons
    */

    // [{name : string, sprites : array, types : array , id : number}]
    let evolutions = []

    console.log("About to fetch evolution tree")

    // [poke1, poke2, poke3, ...], in correct evolution order
    let evoTree = await GetEvolutionTree(evoChain.chain, fetch)

    console.log("evolution tree fetched")

    const allPokemon = await fetchData('https://pokeapi.co/api/v2/pokemon-species?limit=10000', fetch)
    console.log(allPokemon)

    for(let index in evoTree){
        let pokeName = evoTree[index].name
        let pokeSprites = evoTree[index].sprites
        let pokeTypes = evoTree[index].types
        let id = evoTree[index].id

        evolutions.push({name : pokeName, sprites : pokeSprites, types : pokeTypes, id : id})
    }

    respones.push(evolutions)

    console.log("Respones +")
    console.log(respones)

    /* [pokemon, species, abilities, evolution_chain] */
    return { params, response: respones }; 

}


