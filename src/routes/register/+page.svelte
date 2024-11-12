<script>
	import { base } from '$app/paths';
	import {users_store} from '$lib/user';
	
	import { onMount } from 'svelte';
	onMount(() => {
		/*Check if has more then 2 characters*/
		if($users_store.length > 2){
			users = JSON.parse($users_store);
		}
	});	

	let users = [];

	let color = "black";
	let username = "";
	let email = "";
	let password = "";

	function handleSubmit()
	{
		// $ gör att subscribe lyssnar på denna förändring.
		let new_user = {username: username, password : password, email: email, color: color};

		let filtered_list = users.filter(user => user.email == new_user.email)

		if (filtered_list.length != 0){
			alert("User already exists, try logging in")
		}
		else{
			alert("Welcome, register successful!");
			users = [...users, new_user];
			$users_store = JSON.stringify(users)
		}
	}

	/* ----------- */

	let colors = [{name : "Black", value : "black"},{name : "Blue", value : "blue"}, {name : "Red", value : "red"}];
	
</script>
<main>
	<div class="container">
		<h2>Register</h2>

		<form action="" on:submit|preventDefault={handleSubmit}>

			<label for="username">Username:</label>
			<input type="text" id="username" maxlength=16 bind:value={username}>

			<label for="email">E-mail:</label>
			<input type="email" id="email" bind:value={email}>

			<label for="password">Password:</label>
			<input type="password" id="password" bind:value={password}>
			
			<label for="favoriteColor">Favorite Color</label>

			<div class="colorSelection">

				<select id="favoriteColor" bind:value={color}>
					{#each colors as c}
						<option value={c.value}>{c.name}</option>
					{/each}
				</select>

				<div style="width:50px; height:50px; border-radius:50%; overflow:hidden; background:{color};"></div>
			</div>

			<input id="submit" type="submit" value="register">
		</form>
		
	</div>
	<a id="login" href="{base}/login">Have an account already? Log in.</a>
</main>

<style>
	main{
        background-size: cover;
		height: 100vh;
		width: 100vw;
        padding: 5%;

		min-width: 500px;
		min-height: 500px;

		background-size:contain;

		background: rgb(83,0,33);
		background: linear-gradient(0deg, #ff0066 0%, rgba(255,255,255,0) 100%);
    }

	.container{
		border: none;
		border-radius: 20px;
		width: 10%;
		min-width: 300px;
		min-height: 500px;
		height: 80%;
		margin: auto;

		box-shadow: 0px 0px 10px 2px white;

		background: white;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.container h2{
		color: #ff0066;
		font-size: 32px;
		font-family: 'ethnocentric';
		align-self: center;

		text-shadow: 2px 2px #d20557;
	}

	.container label{
		font-family: 'ethnocentric';
		color: #ff0066;
	}

	form input{
		margin-bottom: 16px;
		margin-top: 4px;

		color: white;

		border-style: none;

		border: none;

		border-radius: 20px;
		background: linear-gradient(90deg, rgba(255,0,102,1) 0%, rgb(253, 136, 136) 100%);
		
		transition: all 200ms ease-in-out 0s;
	}

	form input:hover{
		background: darkgray
	}

	form select{
		border: none;

		border-radius: 20px;
		background: linear-gradient(90deg, rgba(255,0,102,1) 0%, rgb(253, 136, 136) 100%);
		margin-top: 4px;

		border-radius: 20px;

		color: white;

		transition: all 200ms ease-out 0s;
	}

	form select:hover{
		background: darkgray;
	}

	form select option{
		border-radius: 20px;
		background-color:#ff0066;
	}

	.colorSelection{
		display: flex;
		align-items: flex-start;
		flex-direction: row;

		justify-content: space-between;
	}

	#submit{
		background: #ff0066;
		color: white;
		width: 100%;
		margin-top: 32px;
		padding: 10px 20px;
		border-radius: 100px;

		font-family: 'ethnocentric';
		
		transition: all 200ms ease-in-out 0s;
	}

	#submit:hover{
		background: darkgray;
		box-shadow: 0px 0px 5px black;
	}

	#submit:active{
		scale: 0.95;
		background-color: rgb(123, 123, 123);
	}

	a{
		color: #d20557;
		text-wrap: wrap;
		font-style: italic;
		text-decoration: underline;
	}

	#login{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 20px;

		color: white;

		font-family: 'ethnocentric';
		font-size: 10px;
	}

</style>