<script>
    import ElizaBot from "elizabot";
    import { enhance } from "$app/forms";

    import {chat_store} from '$lib/user';
    import { onMount } from 'svelte';

    import { base } from '$app/paths';
    
	onMount(() => { 
		chat = $chat_store.length>2?JSON.parse($chat_store):[{user : botName, message : eliza.getInitial(), time : "null"}];
	});

    const eliza = new ElizaBot();
    const botName = "Ambatron"
    let chat = [];

    let isWriting = false;

    async function write(message) {
        if (isWriting || message == "") return;
        //TODO: Add the new message to the chat
        chat.push({user : 'user', message : message, time : "null"})
        chat = chat

        await new Promise((r) => setTimeout(r, 100));
        fixScroll()

        //Hämta HTML-elementet med id:et visible
        var chatBubble = document.getElementById("visible");
        chatBubble.style.display = "flex"; // Visa elementet

        // random delay for Eliza's response time
        isWriting = true;
        
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

        isWriting = false;
        
        chatBubble.style.display = "none"; // Visa bubble

        //TODO: Add Eliza's response to the chat
        let response = eliza.transform(message)

        chat.push({user : botName, message : response, time : "null"})

        $chat_store = JSON.stringify(chat)
        chat = chat
        
        await new Promise((r) => setTimeout(r, 100));
        fixScroll();
  }

  function fixScroll(){
    let content = document.getElementsByClassName("sender")
    console.log(content)
    let lastMsg = content[content.length-1]

    lastMsg.scrollIntoView({behavior : "instant", block: "end"})
    console.log(lastMsg.getHTML())
  }

  function resetChat(){
    chat = [{user : botName, message : eliza.getInitial(), time : "null"}]
    $chat_store = JSON.stringify(chat)

    chat = chat
  }
                
</script>

<h1>Chat with {botName}</h1>
<main>
    <div id="topBar">
        <img style="width: 50px; border-radius:50%; margin: 10px 0px; box-shadow: 0px 0px 2px 2px; " src="images/ambatron.jpg" alt="">
        <h2 style="font-size: 16px; font-family:'ethnocentric'; color : #ff0066; text-shadow: 2px 2px #d20557; white-space : nowrap;">Ambatron</h2>
        <button style="width:50px; height:50px; background-color:#ff0066; padding: 8px;border-radius:50%;"on:click={resetChat}>
            <img style="transform: scale(0.9)" src="{base}/images/bin.png" alt="delete chat button">
        </button>
    </div>
    <section id="chatContent">
        {#each chat as msg}
            <article class:user={msg.user === 'user'}>
                <p class="msg" class:user_msg={msg.user === 'user'}>{msg.message}</p>
                <p style="display:inline-block; font-style:italic;" class="sender">{msg.user}</p>
            </article>
        {/each}
        <article id="visible">
            <div class = "circle"> </div>
            <div class = "circle"> </div>
            <div class = "circle"> </div>
        </article>
    </section>
    
    <form  style="display:flex; justify-content:center; background-color: white; border-top-width: 4px; border-color: light-gray ;border-bottom-left-radius:10px; border-bottom-right-radius:10px; width:100%" method="post"use:enhance={({ formElement, formData, action, cancel }) => {
    cancel(); //don't post anything to server

    const text = formData.get("text");

    write(text);

    // TODO: reset the form using form.reset()
    formElement.reset()

    }}>
            
    <input type="text" name="text" style="width:80%" placeholder="Message {botName}">
    <input type="submit" name="submit" id="submit">
    </form>
</main>

<style>
    h1{
        display: flex;
        justify-content: center;

        margin: 30px 0px;

        font-family: 'ethnocentric';
        font-size: xx-large;

        color: #ff0066;
        text-shadow: 2px 2px #d20557;
    }

    #topBar{
        display:flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 10px;

        background-color: white;
        border-bottom-width: 4px;
    }
    main{
        @font-face {
            font-family: 'ethnocentric';
            src: url();
        }
        width: 30vw;
        height: 70vh;

        border-radius: 10px;

        background-color: white;

        position: absolute;
        left:50%;   
        transform: translateX(-50%);

        scrollbar-color: white lightgray;

        display: flex;
        flex-direction: column;

        justify-content: center;
    }

    section{
        display: flex;
        overflow-y:scroll;   
        overflow-x: hidden;

        
        flex-direction: column;
        height: 100%;

        border-radius: 10px;

        background-color: white;
    }

    article{
        margin:10px;
        padding: 10px;
        
        border-radius: 10px;
        background-color: #E5FF00;

        outline-color: white;
        border-style: none;
        
    }

    input{
        margin:10px;
        padding: 10px;
        
        border-radius: 10px;
        background-color: white;
        
        border-width: 1px;
        border-color: black;
    }

    #submit{
        background-color: white;
        
        border-width: 1px;
        border-color: black;

        transition: scale 200ms ease-out;
    }

    #submit:hover{
        scale: 1.1;
    }

    #submit:active{
        scale:0.8;
    }

    input::placeholder{
        color: gray;
        font-style: italic;
        opacity: 1;
    }

    article{
        min-width: 30%;
        max-width: 90%;

        position: relative;

        right: 0;
    }

    .user{
        background-color: #ff0066;
        color: white;

        align-self: flex-end;
    }

    .msg{
        text-wrap: wrap;
        text-overflow: clip;
    }

    .user_msg{
        text-align: left;
    }

    .sender{
        font-size: 12px;

    }

    @keyframes chatBubbleAnimation{
        0%{transform: scale(1);}
        50%{transform: scale(1.4);}
        100%{transform: scale(1);}
    }

    #visible{
        width: 100px;
        height: 60px;

        display: none;

        background-color: #E5FF00;

        justify-content: space-evenly;
        align-items: center;

        border-radius: 100px;
    }

    .circle{
        width: 10px;
        height: 10px;

        border-radius: 50%;

        background-color: white;

        animation: chatBubbleAnimation 1000ms ease-in-out;
    }

    .circle:first-child{
        animation-delay: 0ms;
    }
    .circle:nth-child(2){
        animation-delay: 333ms;
    }
    .circle:last-child{
        animation-delay: 666ms;
    }
</style>