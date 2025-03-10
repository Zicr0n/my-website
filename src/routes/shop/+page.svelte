<script>
    import { SlideToggle } from "@skeletonlabs/skeleton";
import { onMount } from "svelte";
import { base } from "$app/paths"
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
} from 'svelte/transition';

    let y;

    onMount(()=>{
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            element.id = index

            console.log( element)
        }

        items = items
    })
    let shoppingListState = true

    let items = [
        {name : "Årstid",  price: 270, icon: base + "/lamps/arstid.png", description : "För dig som vill ha en lampa."},
        {name : "Houzz",  price: 300, icon: base +"/lamps/houz.png", description : "Houzz, ett ord som påminner om hus."},
        {name : "Storsegel",  price: 199, icon: base+"/lamps/storsegel.png", description : "Inte att förväxla med storseger."},
        {name : "Living",  price: 599, icon: base+"/lamps/living.webp", description : "Vissa säger att lampan är levande."},
        {name : "Svamp",  price: 189, icon: base+"/lamps/svamp.jpg", description : "Flugor som tycker om svamp."},
        {name : "Vietnam",  price: 100, icon: base+"/lamps/vietnam.jpg", description : "Påminner om Vietnam."},
        {name : "Glasklar",  price: 100, icon: base+"/lamps/glasklar.jpg", description : "Gjord av glas, såklart."},
        {name : "Guld",  price: 899, icon: base+"/lamps/gold.jpg", description : "En antik lampa för de som lever i det förflutna"},
        {name : "Olja",  price: 1999, icon: base+"/lamps/olja.jfif", description : "Tidlös lampa."}
    ]

    let shoppingCart=[]
    let cartSum = 0;

    function OnShoppingList(){
        shoppingListState = !shoppingListState

        console.log(y)
    }

    function addToShoppingList(item)
    {
        let cartItem = {name : item.name, price: item.price, icon: item.icon, count : 1, id : item.id}

        for (let index = 0; index < shoppingCart.length; index++) {
            let element = shoppingCart[index];
            
            if (element.id == item.id){
                element.count = element.count + 1
                console.log(element.count)

                UpdateCart()
                return
            }  
        }

        shoppingCart.push(cartItem)

        UpdateCart()
    }

    function SubtractFromShoppingCart(i){
        let element = shoppingCart[i]
        console.log(element)

        element.count -= 1

        if (element.count <= 0){
            shoppingCart.splice(i, 1)
        }

        UpdateCart()
    }

    function IncreaseCount(i){
        shoppingCart[i].count += 1
        UpdateCart()
    }


    function UpdateCart()
    {
        GetSumOfShoppingCart()
        shoppingCart = shoppingCart
    }

    function GetSumOfShoppingCart(){
        let sum = 0;
        for (let index = 0; index < shoppingCart.length; index++) {
            const element = shoppingCart[index];
            
            sum += element.price * element.count;
        }

        cartSum = sum;
    }

</script>

<svelte:window bind:scrollY={y} />


<main class="h-full w-full container mx-auto">
        <h1 class="h1 w-full text-center text-pretty py-32 text-amber-950 font-extrabold">Lampor</h1>
            <div class="shoppingListButton" style="top:{y> 0 ? 0 :75}px; margin-right:10px;">
                <button on:click={OnShoppingList} style="width:100%" class="btn flex justify-center p-4 rounded-xl hover:shadow-2xl" >
                    <img src="{base}/images/shoppingCart.png" alt="" style="width: 50px; height:50px;">
                </button>
                {#if shoppingListState == true}
                    <ul transition:slide class="shoppingList absolute right-0" style="width:350px">
                        {#if shoppingCart.length > 0}
                            {#each shoppingCart as {name, price, icon, count},i}
                                <li id="items" transition:fade class="mx-4">
                                    <div style="display: flex; justify-content: center; align-items:center; gap:10px;">
                                        <img src={icon} alt="" class="rounded" style="width:50px; height:50px; background-color: white;">
                                        <div>
                                            <p class="h4" style="text-decoration: none; border:none;">{name}</p>
                                            <p style="text-decoration: none; border:none; text-align:start;">{price} kr</p>
                                        </div>
                                    </div>
                                    <div class="flex center justify-center bg-gray-100 rounded px-4 py-1 align-middle m-4" style="gap:10px; margin-right:10px;">
                                        <button on:click={() => SubtractFromShoppingCart(i)} >-</button>
        
                                        <p style="background-color:white; width:20px;">{count}</p>
                                        <button on:click={()=> IncreaseCount(i)}>+<button>
                                    </div>
                                </li>
        
                                {/each}
                                <li>
                                    Total : {cartSum} kr
                                </li>
                
                                <li>    
                                    <button class=" btn h-8 w-52 m-2 rounded" style="background-color: #ebca96"on:click={()=> alert("Gå till Kassan!")}>Gå till Kassan</button>
                                </li>
                        {:else}
                            <p class="text-center p-4">Din varukorg är tom</p>
                        {/if}
                    </ul>
                {/if}
            </div>
        
        <div class="shop">
            {#each items as item}
                <article>
                    <div class="item-content h-full">
                        <div class=" p-4 h-full relative flex flex-col">
                            <h3 class="">{item.name}</h3>
                            <p class="flex-auto">{item.description}</p>
                            <div class="flex justify-between bottom-4">
                                <h3 class="align-text-bottom">{item.price} kr</h3>
                                <button style="border-radius:2px;"class="btn rounded bg-green-300"on:click={() => addToShoppingList(item)}>Lägg till varukorgen</button>
                            </div>
                        </div>
                    </div>
                    <div class="img-wrap">
                        <img src={item.icon} alt="A lamp">
                    </div> 
    
                </article>
            {/each}
          
        </div>
    </main>


<style> 
    main{
        font-family: 'playfair';
        background-image: url("/images/lampBg.avif");

        width: 100vw;
        height: 100vh;
    }

    .header{
        top:10%;
        left: 0;

        width: 100vw;
        max-height: 70px;
        height: 100%;

        z-index: 10;

    }

    .shoppingList{
        width: 100%;
        background-color: white;

        max-height: 400px;

        overflow-y: scroll;
        overflow-x: hidden;

        z-index: -20;
    }

    .shoppingList #items{
        width: 100%;
        text-align: center;
        border-bottom-width: 1px;

        z-index: -1;

        border-color: gray;

        height: 100px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 4px;

        overflow: hidden;
    }

    .shoppingList li, .shoppingList p{
        text-align: center;
        border-bottom-width: 1px;
    }

    .shoppingListButton{
        position: fixed;
        right: 0;
        z-index: 30;

        transition: all 200ms ease-out;
        background-color: white;
        
    }

    .shop{
        display: grid;
        grid-template-columns: repeat(3, 350px);
        grid-template-rows: auto;

        justify-content: center;
        align-content: center;
        
        row-gap: 50px;
        column-gap: 50px;

        padding: 30px;
        overflow: hidden;
        padding-bottom: 30%;

        background-image: url("/images/lampBg.avif");

    }

    @media(min-width : 1280px){
        .shop{
            display: grid;
        }

        article:hover > .item-content{
            top:100%;
            opacity: 1;
        }
    }

    

    @media(max-width : 1280px)
    {

        .shop{
            grid-template-columns: 1fr 1fr; 
        }

        .shoppingListButton{
            width: 70px;
            height: 70px;
        }

        article:hover > .item-content{
            top: 0;
            opacity: 1;
            z-index: 999;

            height: 100%;
        }
    }
    @media(max-width : 550px)
    {

        .shop{
            grid-template-columns: 1fr;
        }

        article:hover > .item-content{
            top: 0;
            opacity: 1;
            z-index: 999;

            height: 100%;
        }
    }

    article{
        width: 100%;
        height: 100%;

        position: relative;
        z-index: 1;

        transition: top 500ms ease-in;

        border-radius: 4px;

        background-clip: padding-box;
        
    }

    article *{
        border-radius: inherit;
    }

    article:hover{
        z-index: 3;
        box-shadow: 0px 0px 20px 10px gray;

        border-bottom-left-radius:0 ;
        border-bottom-right-radius:0 ;
    }
    
    .item-content{
        opacity: 0;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        z-index: -1;
        height: 200px;
        
        background-color: white;
        
        overflow: hidden;
        
        outline-style: double;
        
        outline-width: 2px;
        outline-color: gray;
        transition: all  200ms ease-out;

        border-top-left-radius:0 ;
        border-top-right-radius:0 ;
        
    }
    .img-wrap{
        width: 100%;
        height: 350px;
        overflow: hidden;
        z-index: 1;

        background-color: white;
        position: relative;
    }

    .img-wrap img{
        height: 100%;
        z-index: 1;
        object-fit:fill;

        position: absolute;

        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    .item-content h3{
        font-size: 32px;
        display: inline;
    }

    .item-content p{
        height: 100px;
        width: 100%;

        overflow: hidden;
        bottom: 0;
    }

    .items-content button{
        position: absolute;
        display: block;
        
    }

</style>