
<nav>
	<a href="{base}/search"><img src="{base}/images/search.png" alt="pokemon search" id="search"></a>

	<div class="centralTab">
		<a href="{base}/">Home</a>
		<a id="photo" href="{base}/photoapp">Photo App</a>
		<a id="shoppinglist" href="{base}/shoppinglist">Shopping List</a>
		<a href="{base}/memory" style="border-color : #1900FF; color: #1900FF;">Memory</a>
		<a href="{base}/about">About</a>
	</div>

	<div class="account">
		<a class="accountbutton" href="{base}/register">Register</a>
		<a class="accountbutton" href="{base}/login">Login</a>
		<a href="{base}/chat" id="chat" style="">
			<img src="{base}/images/chat.png" alt="chat" >
		</a>
		<a href="{base}/shop" id="shop" style="">
			<img src="{base}/images/shoppingCartIcon.png" alt="chat" >
		</a>
	</div>
</nav>

<style>	
	@font-face{
			font-family: "ethnocentric";
			src: url("/fonts/ethnocentric.otf");
		}
	
	@font-face{
		font-family: 'playfair';
		src: url('/fonts/playfair.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
		font-display: swap;
	}
	

	:global(body), :global(html){
		margin: 0%;
		padding: 0%;
		width: 100vw;
		overflow-x: hidden;

		background-image: url(https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg);
	}

	nav{
		display: flex;
		width: 100%;

		justify-content: space-between;
		align-items: center;

		margin: 0%;

		padding: 10px 10px;
	}

	.centralTab{
		display: flex;
		justify-content: center;
		width: 50vw;
		max-width: 80vw;
		height: 35px;
	}

	.centralTab a{
		flex-basis: auto;
		flex: fit-content;
		margin: 0px 4px;

		padding: 4px;
		
		color:#ff0066;
		background-color: white;	

		font-family: 'Courier New', Courier, monospace;

		border-radius: 10px;
		border-color: #ff0066;
		border-width: 2px;

		transition: all 200ms ease-in-out;

		text-align: center;
	}

	.centralTab a:hover{
		flex-grow: 4;
	}

	.account{
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-right: 20px;
	}

	.accountbutton{
		display: flex;
		font-family: "ethnocentric";
		padding: 10px;

		margin-right: 10px;

		color: white;
		background-color: #ff0066;
		box-shadow: 2px 2px 0px #ac0045;

		border-radius: 20px;

		transition: all 0.3s ease 0s;
	}

	.accountbutton:hover, #chat:hover, #search:active, #shop:hover{
		background-color: darkgray;
		box-shadow: 0px 0px 5px black;
		scale: 0.95;
	}

	.accountbutton:active{
		scale: 0.95;
		background-color: rgb(123, 123, 123);
	}

	#photo{
		border-color: #00FF99;
		color: #00FF99;
	}

	#shoppinglist{
		border-color: #E5FF00;
		color: #bbcc1b;

		font-size: fit-content;
	}

	#chat{
		background-color: #ff0066; 
		box-shadow: 2px 2px 0px #ac0045;
		
		width:50px; 
		height:50px; 
		
		border-radius: 50%; 
		
		padding:10px; 
		
		transition: all 0.3s ease 0s;
		
	}
	
	#search{
		width: 50px; 
		height: 50px; 

		
		margin: 0px 10px;
		padding: 10px;
		
		border-radius: 20px; 

		background-color: #ff0066; 
		box-shadow: 2px 2px 0px #ac0045;

		transition: all 200ms ease-out;
	}

	#search:hover{
		transform: scale(1.05);
	}

	#shop{
		width: 50px; 
		height: 50px; 

		
		margin: 0px 10px;
		padding: 10px;
		
		border-radius: 50%; 

		background-color: #ff0066; 
		box-shadow: 2px 2px 0px #ac0045;

		transition: all 200ms ease-in-out;
	}
</style>

<script>
	import '../app.postcss';

	import { dev } from '$app/environment';
	import { base } from '$app/paths';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<slot />

