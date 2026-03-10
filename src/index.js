import "./style.css"
import { homePageload } from "./home-page.js";
import { menuPageLoad } from "./menu.js";
import { aboutPageLoad } from "./about.js";
import { activeButton, handleBtnListener } from "./utilities.js";

const btnHome = document.querySelector('#btn-home')

homePageload()
activeButton(btnHome)
handleBtnListener(homePageload,menuPageLoad,aboutPageLoad)


