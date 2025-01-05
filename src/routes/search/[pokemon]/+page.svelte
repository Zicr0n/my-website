<script>
    import { base } from '$app/paths';
    import {search_store} from '$lib/user';
	import { error } from '@sveltejs/kit';
	import {pokemon_type_colours} from './pokedata.js';
	
	/** @type {import('./$types').PageData} */
	export let data;

	let resolvedPokemon;

	$: if (resolvedPokemon) {
        onSearch(resolvedPokemon.response.name);
    }

	function onAbilityInfoPressed(tagName){
		let ability = document.getElementsByName(tagName)

		ability[0].style.opacity = 1;
		ability[0].style.display = "block"

	}
	
	function onAbilityInfoClosed(tagName){
		let ability = document.getElementsByName(tagName)

		ability[0].style.opacity = 0;
		ability[0].style.display = "none"
	}

	function onSearch(pokemonName, color)
    {
		let latestSearches = $search_store.length>2?JSON.parse($search_store):[];
		
		// Check for existence
		let doesExist = false

		for(let index in latestSearches){
			if(latestSearches[index].name === pokemonName){
				// Exists, ignore
				doesExist = true;
			}
		}

		if(doesExist) {return ""}

        latestSearches.unshift( {link : (base + "/search/" + pokemonName), name : pokemonName, color : color})
    
        // Remove if overflow
        latestSearches.length > 5?latestSearches.pop():null

        // Save
        $search_store = JSON.stringify(latestSearches)

        latestSearches = latestSearches

		return " ";
    }

</script>

<!-- data.response looks like this : [pokemon, species, abilities, evolution_chain({name, sprites, types, id}] -->

{#await data}
	<p>.. waiting</p>
{:then dataList}
	{onSearch(dataList.response[0].name, dataList.response[1].color.name)}

	<h2>{dataList.response[0].name.toUpperCase()} <span id="id" style="font-size: 20px">#{String(dataList.response[0].id).padStart(4, '0')}</span></h2>

	<article>
		
		<div class="left">
			<div id="sprite">
				{#each Object.entries(dataList.response[0].sprites) as sprites}
					{#if typeof sprites[1] == 'string' && sprites[0].includes("front_default")}
						<img src={sprites[1]} alt="pokemon"/>
					{/if}
				{/each}
			</div>

			<div class="sprite-showcase">
				{#each Object.entries(dataList.response[0].sprites) as sprites}
					<img style="display: inline;" src={sprites[1]} alt=""> 
				{/each}
			</div>
		</div>

		<div class="right">
			<div style="width: 100%; max-height:300px; height:300px; display:block; position: relative; background-color: white; ">
				<ul class="stats">
					<li>
						<span class="attribute-title">Species</span>
						<span class="attribute-value">{dataList.response[0].species.name.toUpperCase()}</span>
					</li>
					<li>
						<span class="attribute-title">Weight</span>
						<span class="attribute-value">{dataList.response[0].weight} hg</span>
					</li>
					<li>
						<span class="attribute-title">Height</span>
						<span class="attribute-value">{dataList.response[0].height} dm</span>
					</li>
					<li>
						<span class="attribute-title">Habitat</span>
						<span class="attribute-value">{dataList.response[1].habitat?dataList.response[1].habitat.name.toUpperCase():"no Habitat"}</span>
					</li>
					<li>
						<span class="attribute-title">Abilities</span>
						<ul>
							{#each dataList.response[2] as ability}
								<li class="attribute-value">
									<p style="display: inline;">{ability.name.toUpperCase()}</p>
									<button class="ability-button" on:click={onAbilityInfoPressed(ability.name)} style ="width: 25px; height: 25px; border-radius: 50%; background-color: white; display: inline; align-text: center;">?</button>
								</li>
							{/each}
						</ul>
					</li>
				</ul>

				{#each dataList.response[2] as ability}
					<div class="abilityBox" name={ability.name}>
						<button  on:click={onAbilityInfoClosed(ability.name)} style="background-color: lightgray; position: absolute; right: 0; top: 0; padding: 20px; border-radius:10px">Close</button>
						<p style="color: lightgray; font-size: 14px">Ability Info</p>

						<p class="ability-name">{ability.name.toUpperCase()}</p>
						<p class="ability-description">{ability.effect_entries[1]?
						ability.effect_entries[1].short_effect:
						ability.flavor_text_entries[1].flavor_text}</p>
					</div>
				{/each}
			</div>

			<h3>Type</h3>
			<div class="types">
				{#each dataList.response[0].types as type}
					<section class="type" style="background-color: {pokemon_type_colours[type.type.name]}; ">{type.type.name.toUpperCase()}</section>
				{/each}
			</div>
		</div>
	</article>

	<div class="evolutions_tab">
		<h2>Evolutions</h2>
		<ul class="evolutions_list">
			{#each dataList.response[3] as pokemonDict}
				<li class="evolutionPokemon">
					<a class="evoImage"href="{base + "/search/" + pokemonDict.name}">
						{#each Object.entries(pokemonDict.sprites) as sprites}
							{#if typeof sprites[1] == 'string' && sprites[0].includes("front_default")}
								<img src={sprites[1]} alt="pokemon"/>
							{/if}
						{/each}
					</a>

					<a href="{base + "/search/" + pokemonDict.name}" class="evoName">{pokemonDict.name.toUpperCase()} <span id="id">#{String(pokemonDict.id).padStart(4, '0')}</span></a>

					<div class="evoTypes">
						{#each pokemonDict.types as type}
							<section class="type" style="background-color: {pokemon_type_colours[type.type.name]}; ">{type.type.name.toUpperCase()}</section>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</div>

{/await}

<style>
	article {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;
		height: fit-content;

		margin-bottom: 100px;
	}
	
	@media (min-width: 1000px){
		article{
			display: grid;
		}

		.evolutions_list{
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
		}

	}

	@media (max-width: 1000px){
		article{
			grid-template-columns: 1fr;
		}

		.evolutions_tab h2{
			text-align: center;
		}

		.evolutions_list{
			flex-direction: column;
			width: 100%;
			justify-content: center;
		}

		.evolutionPokemon{
			justify-content: center;
			align-items: center;

			margin-bottom: 20px;
		}
	}

	h2{
		font-size: xx-large;
		margin: 20px;
		font-family: 'ethnocentric';
		color: black;
	}

	h3{
		margin: 20px 0px 0px 0px;
		font-family: 'ethnocentric';
		font-size: x-large;
	}

	.left{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		align-items: flex-start;
		margin: 10px;
	}

	#sprite{
		width: 100%;
		height: auto;
		image-rendering: pixelated;

		background-color: lightgray;

		border-radius: 10px;

		box-shadow: 0px 2px 5px 2px darkgray;

		background-image: url("/images/pattern.png");
	}
	
	#sprite img{
		transition: all 200ms ease-out;
		height: auto;
		width: 100%;
	}

	#sprite img:hover{
		scale: 1.1;
	}

	.sprite-showcase{
		width: 100%;

		overflow-y: hidden;
		overflow-x: scroll;

		display: flex;
		gap: 10px;

		background-color: darkgray;

		margin: 20px 0px;

		border-radius: 10px;
		scroll-snap-type: x mandatory;
	}

	.sprite-showcase img{
		scroll-snap-align: center;

		image-rendering: pixelated;

		transition: all 200ms ease-in-out;
	}

	.sprite-showcase img:hover{
		transform: scale(1.3);
	}

	.right{
		min-width: 50%;

		margin: 10px;
	}

	.stats{
		position: absolute;
		width: 100%;
		height: 100%;

		background-color: #ff0066;

		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		row-gap: 10px;

		border-radius: 10px;
		padding: 10px;
	}

	.attribute-title{
		display: block;
		margin: 0px 0px 0px 10px;

		font-size: 16px;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		color: white;
	}

	.attribute-value{
		margin: 5px 0px 0px 10px;

		font-size: 20px;
		font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
	}

	.abilityBox{
		display: none;
		background-color: rgb(38, 38, 38);

		padding: 20px;

		position: absolute;

		width: 100%;
		height: 100%;

		z-index: 1;

		border-radius: 10px;

		opacity: 0;
		transition: all 200ms ease-out;
	}

	.ability-button:hover{
		scale: 1.1;
	}

	.ability-name{
		color: white;
		display: block;

		font-size: 20px;

		margin-top: 20px;
	}
	.ability-description{
		color: white;
		font-size: 16px;

		margin-top: 10px;
	}

	.types{
		width: 100%;
		
		display: flex;
		justify-content: flex-start;
	}

	.type{
		width: 100px;

		text-align: center;
		margin: 5px;
		
		border-radius: 4px;
	}

	.evolutions_tab{
		width: 100%;
		border-radius: 20px;
		margin: 10px;
		height: 100%;
		
		background-image: url("/images/pattern.png");
		background-size: cover;
		image-rendering:crisp-edges;
		background-color: rgb(109, 109, 109);

		margin-bottom: 100px;
	}

	.evolutions_tab h2{
		color: white;
	}

	.evolutions_list{
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		padding: 20px;

		height: 100%;
		width: 100%;

		flex-wrap: wrap;
		
	}

	.evolutionPokemon{
		display: flex;
		justify-content: space-around;
		align-items: center;

		flex-direction: column;
	}

	a{
		transition: all 200ms ease-out;
	}

	a:hover{
		transform: scale(1.1);
	}

	a:active{
		scale: 0.8;
	}

	.evoName{
		text-align: center;
		width: 100%;
		margin: 5px;

		font-family: 'ethnocentric';

		color: white;
	}

	#id{
		color: rgb(153, 153, 153);
		font-size: 12px;
	}

	.evoImage{
		background-color: gray;
		border-color: white;
		border-width: 4px;
		border-radius: 50%;
		padding: 20px;

		image-rendering: pixelated;

		box-shadow: 0px 2px 10px 1px white;
	}
	.evoTypes{
		margin: 4px;
	}

</style>
