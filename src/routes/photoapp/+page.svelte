<script>
   let character = "images/character.png";
   let diamond = "images/diamond.png";
   let smurf = "images/smurf.png";
</script>

<main>
    <h1>
        Photoapp
    </h1>
    <div id="photoGallery">
        <div class="photos">  
            <div class="image-wrapper"><img src={character} alt="myImage"></div>
            <div class="image-wrapper"><img src={smurf} alt="myImage"></div>
            <div class="image-wrapper"><img src={diamond} alt="myImage"></div>       

            <div class="image-wrapper"><img src={character} alt="myImage"></div>
            <div class="image-wrapper"><img src={smurf} alt="myImage"></div>
            <div class="image-wrapper"><img src={diamond} alt="myImage"></div>

            <div class="image-wrapper"><img src={character} alt="myImage"></div>
            <div class="image-wrapper"><img src={smurf} alt="myImage"></div>
            <div class="image-wrapper"><img src={diamond} alt="myImage"></div>  
            
            <div class="image-wrapper"><img src={character} alt="myImage"></div>
            <div class="image-wrapper"><img src={smurf} alt="myImage"></div>
            <div class="image-wrapper"><img src="https://i.redd.it/rofzm44oka091.png" alt="myImage"></div>  

            <div class="image-wrapper"><img src="https://i.redd.it/rofzm44oka091.png" alt="myImage"></div>  
        </div>
    </div>
    
</main>
<svg id="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00ff99" fill-opacity="1" d="M0,128L17.1,138.7C34.3,149,69,171,103,154.7C137.1,139,171,85,206,96C240,107,274,181,309,181.3C342.9,181,377,107,411,74.7C445.7,43,480,53,514,64C548.6,75,583,85,617,106.7C651.4,128,686,160,720,154.7C754.3,149,789,107,823,85.3C857.1,64,891,64,926,64C960,64,994,64,1029,90.7C1062.9,117,1097,171,1131,165.3C1165.7,160,1200,96,1234,90.7C1268.6,85,1303,139,1337,160C1371.4,181,1406,171,1423,165.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>

    <style>
        main{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-flow: column;
            
        }
        #photoGallery{
            display: flex;
            justify-content: center;
            flex-basis: 1;
            align-items: center;
        }
        .photos{
            display: flex;
            max-width: 90vw;
            
            align-items: flex-start;
            justify-content: center;

            flex-wrap: wrap;

            overflow: hidden;
            padding-bottom: 100px;

            background: rgb(255,255,255);
            background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,255,153,1) 100%, rgba(0,212,255,1) 100%);

            border-radius: 20px;
        }

        .image-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;   
            flex-basis: 0;

            align-self:normal;
            
            max-width: 250px;
            min-width: 200px;

            border-radius: 20px;
            
            box-shadow: 0px 0px 10px black;

            transition: flex 200ms ease-in-out normal;

            border-radius: 20px;

            border-color:#048d5665;
            border-width: 5px;
            border-style: outset;

            background-color: rgba(201, 201, 201, 0.551);
        }

        .image-wrapper:hover{
            flex-grow: 1;
        }

        .image-wrapper:active { 
            transition: transform 200ms ease-in-out normal;
            transform: scale(0.9); 
        }

        .image-wrapper img{
            width: 100%;
            border-radius: 20px;
        }

        h1{
            padding-bottom: 100px;
            padding-top: 50px;
            text-align: center;
            font-size: 65px;
            margin: 30px;
            color: #00FF99;
            font-family: 'ethnocentric';
            text-shadow: 2px 2px #06dc86;
        }

        #waves{
            position: absolute;
            padding-bottom: 0%;
        }

    </style>
