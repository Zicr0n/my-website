<nav>
	<a href="{base}/">Home</a>
	<a id="photo" href="{base}/photoapp">Photo App</a>
	<a href="{base}/about">About</a>

</nav>

<style>
	nav{
		display: flex;
		justify-content: center;
	}
	a{
		color:#ff0066;
		background-color: rgb(248, 248, 248);	

		font-family: 'Courier New', Courier, monospace;
		
		padding: 10px 20px 10px 20px;
		padding-top: 10px;

		margin-right: 10px;
		margin-top: 10px;

		border-radius: 10px;
		border-color: #ff0066;
		border-width: 2px;

		transition: scale 200ms ease-in-out;
	}

	a:hover{
		scale: 1.2;
	}

	#photo:hover{
		border-color: lime;
		color: lime;
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

	let themeColor = "#FFFFFF"
</script>

<slot />

