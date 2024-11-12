<script>
	let theme = "#ff0066";
</script>

<main style="--theme-color: {theme}">
	<div>
		<h1 id=myName> Mohammad Samir Alalwani </h1>
	  	<h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
	  	<h3>Inspirerade citat för min webbutvecklingsresa:</h3>
	  	<!--Under denna kommer vi lägga till fler element-->
	  	
		<p id="inspo" class="quote">
			<strong>"The only way to learn a new programming language is by writing programs in it." <br><span>Dennis Ritchie , creator of the C programming language.
		</p>

		<p class="quote"style="padding-left: 20px; padding-top: 10px;font-family:'Times New Roman', Times, serif; font-style:italic">
		<strong>"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span><br>Patrick McKenzie, software engineer and entrepreneur.</span>
		</p>
  
	</div>
	  <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  
	<div id="diamond-holder">
	  	<img src="images/diamond-shape.png" alt="text">
	</div>
  
</main>

<svg id = "wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff0066" fill-opacity="1" d="M0,128L11.4,133.3C22.9,139,46,149,69,154.7C91.4,160,114,160,137,133.3C160,107,183,53,206,53.3C228.6,53,251,107,274,122.7C297.1,139,320,117,343,90.7C365.7,64,389,32,411,16C434.3,0,457,0,480,48C502.9,96,526,192,549,229.3C571.4,267,594,245,617,240C640,235,663,245,686,218.7C708.6,192,731,128,754,90.7C777.1,53,800,43,823,42.7C845.7,43,869,53,891,80C914.3,107,937,149,960,154.7C982.9,160,1006,128,1029,101.3C1051.4,75,1074,53,1097,64C1120,75,1143,117,1166,122.7C1188.6,128,1211,96,1234,117.3C1257.1,139,1280,213,1303,213.3C1325.7,213,1349,139,1371,101.3C1394.3,64,1417,64,1429,64L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"></path></svg>

  <style>
	main{
	  /*Styling för att dela upp sidan i två delar. */
	  /*Vi kommer gå igenom detta i detalj senare*/
	  margin: auto;
	  width: 90vw;
	  height: 70vh;
	  display: grid;
	  grid-template-columns: repeat(2,50%);
	  overflow: hidden;
	}

	div{
	  /*Styling för att centrera texten i behållaren*/
	  margin: auto;
	}

	@font-face{
		font-family: "ethnocentric";
		src: url("/fonts/ethnocentric.otf");
	}

	#myName{
		font-size: 40px;
		line-height: 35px;
		padding-bottom: 30px;
		font-family: "ethnocentric";
		text-decoration: dashed;
		text-wrap:pretty;	
		color: var(--theme-color);
		text-shadow: 2px 2px #d20557;
		transition: transform 0.2s ease-out;
	}
	#myName:hover{
		transform: translateX(-10px);
	}

	#inspo{
    	font-family: 'Times New Roman', Times, serif;
		font-style: italic;
		text-wrap:wrap;
		padding-left: 20px;
		padding-top: 10px;
	}
	.quote{
		transition: scale 0.2s ease-out;
	}
	.quote:hover{
		scale: 1.1;
		animation: hovering 10s ease-in-out infinite;
	}

	span{
		color: #ff0066;
		font-style: normal;
	}

	h1, h2, h3, p {
  		display: grid;
  		/*Ger utrymme mellan element*/
  		margin: 11px;
	}

	/* diamond hovering */
	@keyframes hovering{
		0%{
			transform: translateY(0px);
		}
		50%{
			transform: translateY(-20px);
		}	
		100%{
			transform: translateY(0px);
		}
	}

	@keyframes spin{
		0%{
			rotate: y 0;
		}
		100%{
			rotate: y 360deg ;
		}
	}

	#diamond-holder{
		margin-left: auto;
		margin-right: auto;
		padding-top: 0px;
		max-width: 20vw;

		animation: hovering 6s ease-in-out infinite;

		transition: rotate 700ms ease-in-out;
	}
	#diamond-holder img{
		transition: scale 300ms ease-in-out;
	}
	#diamond-holder:hover{
		rotate: y 180deg;
	}
	#diamond-holder img:hover{
		scale: 1.21;
	}

	</style>