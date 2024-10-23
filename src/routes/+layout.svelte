<nav>
	<img id="logo" src="images/diamond-shape.png" alt="diamond">
	<div class="centralTab">
		<a href="{base}/">Home</a>
		<a id="photo" href="{base}/photoapp">Photo App</a>
		<a href="{base}/about">About</a>
	</div>
	
	<a id="register" href="{base}/register">Register</a>
</nav>

<style>
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
		flex: 1.5;
		margin-right: 4px;
		margin-left: 4px;	

		padding: 4px;
		
		color:#ff0066;
		background-color: rgb(248, 248, 248);	

		font-family: 'Courier New', Courier, monospace;

		border-radius: 10px;
		border-color: #ff0066;
		border-width: 2px;

		transition: flex-grow 200ms ease-in-out;

		text-align: center;
	}

	.centralTab a:hover{
		flex: 2;
	}

	#register{
		font-family: "ethnocentric";
		margin-right: 24px;
		padding: 10px;
		background-color: rgb(229, 229, 229);

		border-radius: 20px;

		transition: all 0.3s ease 0s;
	}

	#register:hover{
		background-color: darkgray;
		
	}

	#register:active{
		scale: 0.95;
	}

	#photo{
		border-color: #00FF99;
		color: #00FF99;
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

