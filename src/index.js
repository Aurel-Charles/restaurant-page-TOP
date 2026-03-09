import "./style.css"
import { homePageload } from "./home-page.js";
import { menuPageLoad } from "./menu.js";
import { aboutPageLoad } from "./about.js";

console.log('Hello!');

const btnHome  = document.querySelector('#btn-home')
const btnMenu  = document.querySelector('#btn-menu')
const btnAbout  = document.querySelector('#btn-about')

const container = document.querySelector('#content')

homePageload()

btnHome.addEventListener('click', ()=>{
    container.replaceChildren()
    homePageload()
})
btnMenu.addEventListener('click', ()=>{
    container.replaceChildren()
    menuPageLoad()
})
btnAbout.addEventListener('click', ()=>{
    container.replaceChildren()
    aboutPageLoad()
})
