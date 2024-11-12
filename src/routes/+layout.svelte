
<nav>
	<img id="logo" src="images/diamond-shape.png" alt="diamond">
	<div class="centralTab">
		<a href="{base}/">Home</a>
		<a id="photo" href="{base}/photoapp">Photo App</a>
		<a id="shoppinglist" href="{base}/shoppinglist">Shopping List</a>
		<a href="{base}/about">About</a>
	</div>
	<div class="account">
		<a class="accountbutton" href="{base}/register">Register</a>
		<a class="accountbutton" href="{base}/login">Login</a>
	</div>
	
</nav>

<style>
	:global(body), :global(html){
		margin: 0%;
		padding: 0%;
		height: 100vh;
		width: 100vw;

		background-image: url(https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg);
	}
	nav{
		display: flex;
		width: 100vw;
		justify-content: space-between;
		align-items: center;

		padding-top: 10px;
		padding-bottom: 10px;
	}

	#logo{
		max-width: 50px;
		margin-left: 24px;

		transition: all 200ms ease-in-out;
	}
	#logo:hover{
		scale: 1.1;
	}

	.centralTab{
		display: flex;
		width: 50vw;
		justify-content: center;
		max-width: 30vw;
		height: 35px;
	}

	.centralTab a{
		flex-basis: auto;
		flex: fit-content;
		margin-right: 4px;
		margin-left: 4px;	

		padding: 4px;
		
		color:#ff0066;
		background-color: rgb(248, 248, 248);	

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

	.accountbutton:hover{
		background-color: darkgray;
		box-shadow: 0px 0px 5px black;
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
</style>

<script>
	import '../app.postcss';
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

