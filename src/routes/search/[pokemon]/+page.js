
import { error } from '@sveltejs/kit';

/* don't generate these pages at build time as we want to get the latest data from the API when a user navigates here */
export const ssr = true;

async function fetchData(url, fetch){
    const response = await (fetch?fetch:window.fetch)(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc. 
    });

    // check for error
    if (response.status != 200) {
        throw error(response.status, { message: response.statusText })
    }

    let data = await response.json(); // parses JSON response into native JavaScript objects

    return data
}

async function GetEvolutionTree(chainLink){
    let chainLinks = []
    let currentChainLink = chainLink

    console.log("Looping Initiated")

    chainLinks.push(await GrabPokemonFromEvolution(currentChainLink))

    while (true)
    {
        if(currentChainLink.evolves_to.length != 0)
        {
            for(let index in currentChainLink.evolves_to)
            {
                console.log(index)
                console.log(currentChainLink.evolves_to[index])
                chainLinks.push(await GrabPokemonFromEvolution(currentChainLink.evolves_to[index]))
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


async function GrabPokemonFromEvolution(chainLink){
    return await fetchData('https://pokeapi.co/api/v2/pokemon/' + chainLink.species.name)
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

    // Run through each one, GET each
    for(let index in fetches){
        let url = fetches[index]
        const data = await fetchData(url, fetch); // parses JSON response into native JavaScript objects

        // Add respones
        respones.push(data)
    }

    // Pokemon and pokemon-species fetched, now fetch the pokemon's abilities
    let abilities = []

    for(let index in respones[0].abilities)
    {
        let entry = respones[0].abilities
        let url = entry[index].ability.url

        const data = await fetchData(url, fetch)

        abilities.push(data)
    }

    respones.push(abilities)

    // Now fetch the evolution chain of the pokemon, and each pokemon.
    let evoChain = await fetchData(respones[1].evolution_chain.url, fetch)
    console.log("Chain of evo")
    console.log(evoChain)

    /* Data structure :
    respones[3] -> .chain -> .species ==> the base evolution I.E baby
    respones[3] -> chain -> evolves_to[0] -> .species ==> the next evolution
    respones[3] -> chain -> evolves_to[0] -> evolves_to[0] -> .species ==> evolution after

    each one of the evolves_to[0] has a species array, which can be used to retrieve the pokemon name
    thus, able to retrieve an the sprite of the pokemons
    */

    // [{name : string, sprites : array, types : array , id : number}]
    let evolutions = []

    // [poke1, poke2, poke3, ...], in correct evolution order
    let evoTree = await GetEvolutionTree(evoChain.chain)

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


