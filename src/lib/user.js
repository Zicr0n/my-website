import { browser } from "$app/environment";
import { writable } from "svelte/store";

const users = browser ? window?.localStorage.getItem('users') ?? "" : ""
const chat = browser ? window?.localStorage.getItem('chat') ?? "" : ""

export const users_store = writable(users);
export const chat_store = writable(chat);

if (browser){
    users_store.subscribe((value) => {
        window?.localStorage.setItem('users', value);  
    })

    chat_store.subscribe((value) =>{
        window?.localStorage.setItem('chat', value);
    })
}

