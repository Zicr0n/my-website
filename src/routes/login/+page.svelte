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

	function handleSubmit(){
		// $ gör att subscribe lyssnar på denna förändring.
		let new_user = {username: username, password : password, email: email, color: color};

		let filtered_list = users.filter(user => user.email == new_user.email)
		console.log(new_user)

		if (filtered_list.length != 0 && filtered_list[0].password === new_user.password){
			alert("Logged in successfully")	
		}
		else{
			alert("User does not exist or password is incorrect")
		}
	}

	/* ----------- */

	let colors = [{name : "Black", value : "black"},{name : "Blue", value : "blue"}, {name : "Red", value : "red"}];
	
</script>
<main>
	<div class="container">
		<h2>Login</h2>
		<form action="" on:submit|preventDefault={handleSubmit}>
			<label for="email">E-mail:</label>
			<input type="email" id="email" bind:value={email}>

			<label for="password">Password:</label>
			<input type="password" id="password" bind:value={password}>

			<input id="submit" type="submit" value="login">
		</form>
	</div>
	<a id="login" href="{base}/register">Don't have an account? Register here.</a>
</main>

<style>
	main{
		
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;

		min-width: 500px;
		min-height: 500px;

		background: rgb(83,0,33);
		background: linear-gradient(0deg, #ff0066 0%, rgba(255,255,255,0) 100%);
    }

	.container{
		border: none;
		border-radius: 20px;
		width: 10%;
		min-width: 300px;
		min-height: 500px;
		height: 50%;
		margin: auto;

		box-shadow: 0px 0px 10px 2px white;

		background: white;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
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

	form{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
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

	#submit{
		background: #ff0066;
		color: white;
		width: 100%;
		margin-top: 70px;
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