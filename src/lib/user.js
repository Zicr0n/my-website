import { browser } from "$app/environment";
import { writable } from "svelte/store";

const users = browser ? window?.localStorage.getItem('users') ?? "" : ""
const chat = browser ? window?.localStorage.getItem('chat') ?? "" : ""
const search = browser ? window?.sessionStorage.getItem('search') ?? "" : ""
const score = browser ? window?.localStorage.getItem('score') ?? "" : ""

export const users_store = writable(users);
export const chat_store = writable(chat);
export const search_store = writable(search);
export const score_store = writable(score)

if (browser){
    users_store.subscribe((value) => {
        window?.localStorage.setItem('users', value);  
    })

    chat_store.subscribe((value) =>{
        window?.localStorage.setItem('chat', value);
    })

    search_store.subscribe((value) =>{
        window?.sessionStorage.setItem('search', value);
    })

    score_store.subscribe((value) =>{
        window?.localStorage.setItem('score', value);
    })


}