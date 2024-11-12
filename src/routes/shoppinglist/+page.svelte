
<script>
    import { fade } from 'svelte/transition'
    let items = [{name: "Milk" , bought : false}];

    let itemToAdd = "";

    function addItem(){
        if (itemToAdd == ""){
            alert("There is nothing to add!")
            return;
        }

        items.unshift({name : itemToAdd, bought : false})
        items=items
    }

    function removeItem(item){
       items.splice(items.indexOf(item), 1)
       items=items;
    }

    function moveItem(item){
        item.bought = !item.bought;
        items = items
    }

</script>

<main class="container">
    <h1>Shopping List</h1>
    <div class="categories_container">
        <section>
            <h2>Varor att köpa</h2>

            <input type="text" id="itemToAdd" bind:value={itemToAdd} maxlength=16 placeholder="Skriv ner varan">

            <button id="addItemButton" on:click={addItem}><strong>Lägg till vara</button>

            <ul>
                {#each items as item}
                    {#if item.bought === false}
                        <li>
                            <button id="moveItemButton" on:click={moveItem(item)}>{item.bought?"":item.name}</button>
                            <button id="removeItemButton" on:click={removeItem(item)}>x</button>
                        </li>  
                    {/if}  
                {/each}
            </ul>
        </section>
        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each items as item}
                    {#if item.bought === true}
                        <li>
                            <button id="moveItemButton" on:click={moveItem(item)}>{item.bought?item.name:""}</button>
                            <button id="removeItemButton" on:click={removeItem(item)}>x</button>
                        </li>  
                    {/if}
                {/each}
            </ul>
        </section>
    </div>
</main>

<style>
    .container{
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
        margin-top: 30px;

        background-color: rgb(0,0,0,0.65);
        box-shadow: 0px 0px 10px 10px rgb(0,0,0,0.65);
        border-radius: 10px;
        border-style: inset;

        width: 60vw;
        height: 80vh;
        border-style: none;

        justify-self: center;
    }

    .container h1{
        text-align: center;
        border-radius: 5px;
        padding: 4px;

        justify-self: center;
        align-self: center;

        color: #E5FF00;
        font-family: 'ethnocentric';
        font-size: 38px;
        text-shadow: 2px 2px #9dae00;
    }

    .categories_container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 10px;
        
        margin: 0px 10px;
        height: 100%;
    }

    .categories_container section{
        width: 100%;

        border-radius: 10px;
        border-width: 2px;
        border-color: #E5FF00;
    }

    .categories_container section:first-child{
        background-color: rgb(0,0,0,0.4);
    }
    
    .categories_container section:last-child{
        background-color: rgb(0,0,0,0.3);
        
    }
    .categories_container section h2{
        font-size: 22px;
        font-family: 'ethnocentric';
        color:#E5FF00;

        font-size: 20px;
        text-align: center;
        padding: 10px;

        width: 100%;

        border-width: 0px 0px 2px 0px;
        border-color: #E5FF00;
    }

    .categories_container section input{
        border-radius: 4px;
        margin: 8px;
        height: 30px;

        background-color: rgb(255,255,255, 0.3);
        color: white;

        box-sizing: border-box;
        border-style: solid;

        outline-color: #E5FF00;

        transition: all 200ms ease-in-out 0s;
    }

    .categories_container section input:focus{
        outline: none;
        outline-color: #E5FF00;
    }

    .categories_container section input:hover{
        outline: solid;
        outline-color: #E5FF00;
    }

    .categories_container section input::placeholder{
        color: rgba(255, 255, 255, 0.541);
    }

    input::selection{
        background-color: #e5ff009c;
        color: black;
        border: none;
    }

    #addItemButton{
        background-color: #E5FF00;
        padding: 4px;
        border-radius: 20px;
        margin-left: 10px;

        transition: all 200ms ease-in-out 0s;
    }

    #addItemButton:hover{
        scale: 1.1;
    }

    #addItemButton:active{
        scale: 0.9;
        filter: grayscale(100);
    }

    #moveItemButton{
        width: 100%;
        text-align: left;
    }

    li{
        margin: 10px;
        margin-bottom: 15px;
        padding-bottom: 4px;
        padding-left: 10px;

        font-size: 24px;
        color: aliceblue;

        background-color: rgb(0,0,0, 0.2);
        
        position: relative;
        
        border-width: 0px 0px 1px 0px;
        border-color: #E5FF00;

        border-top-right-radius: 2px;
        border-top-left-radius: 2px;

        transition: all 200ms ease-in-out 0s;
    }
    li:hover{
        background-color: rgb(0,0,0, 0.4);
    }

    #removeItemButton{
        position: absolute;
        right: 0;
        bottom: 2.5px;

        padding-right: 5px;

        color: #E5FF00;

        text-align: center;

        transition: all 200ms ease-in-out;
    }
    #removeItemButton:hover{
        scale: 1.1;
    }

    
</style>