<script>
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"
</script>

<main>
    <h1>
        Photoapp
    </h1>
    <div class="photos">  
            <div class="image-wrapper"><img src={image} alt="myImage"></div>
            <div class="image-wrapper"><img src={photo} alt="myImage"></div>
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
            <div class="image-wrapper"><img src={picture} alt="myImage"></div>   
    </div>
</main>

    <style>
        .photos{
            display: flex;
            flex-wrap: wrap;
            max-width: 100vw;

            align-items: flex-start;
            justify-content: center;

            overflow: hidden;
            padding-bottom: 100px;
        }

        .image-wrapper{
            flex-grow: 1;
            margin: 15px;

            min-width: 300px;

            border-radius: 20px;
            background-color: gainsboro;
            
            box-shadow: 4px 8px 10px black;

            transition: flex-grow 200ms ease-in-out normal;
            
        }

        .image-wrapper:hover{
            flex-grow:2;
        }

        .image-wrapper:active { 
            transition: transform 200ms ease-in-out normal;
            transform: scale(0.9); }

        .image-wrapper img{
            width: 100%;
            border-radius: 20px;
        }

        h1{
            text-align: center;
            font-size: 50px;
            margin: 20px;
            color: grey;
        }

    </style>
