import { aboutPageLoad } from "./about.js"
import { homePageload } from "./home-page.js"
import { menuPageLoad } from "./menu.js"

// ./src/utilities.js
function imageMaker(source, description) {
    const img = document.createElement('img')
    img.src = source
    img.alt = description
    img.classList.add("image")
    return img
}

function titleMaker(text) {
    const title = document.createElement('h1')
    title.textContent = text
    title.classList.add('title')
    return title
}

function heroMaker(imageSrc,imageDescription, titleText) {
    const heroWrapper = document.createElement('div')
    heroWrapper.classList.add('heroWrapper')
    const image = imageMaker(imageSrc, imageDescription)
    image.classList.add('hero-image')
    const title = titleMaker(titleText)
    title.classList.add('hero-title')
    heroWrapper.appendChild(image)
    heroWrapper.appendChild(title)
    return heroWrapper
}

function activeButton(activeButton) {
    const btnHome  = document.querySelector('#btn-home')
    const btnMenu  = document.querySelector('#btn-menu')
    const btnAbout  = document.querySelector('#btn-about')
    
    btnHome.classList.remove("active")
    btnMenu.classList.remove("active")
    btnAbout.classList.remove("active")
    

    activeButton.classList.add("active")
}

function clearContainer() {
    const container = document.querySelector('#content')
    container.replaceChildren()
}

function handleBtnListener(homePageload, menuPageLoad, aboutPageLoad) {
    const btnCliked = document.querySelectorAll('button')
    const btnHome  = document.querySelector('#btn-home')
    const btnMenu  = document.querySelector('#btn-menu')
    const btnAbout  = document.querySelector('#btn-about')

    btnCliked.forEach(element => {
        element.addEventListener('click', (e)=>{
            let idButton = e.target.id
            if (idButton == "btn-home") {
                clearContainer()
                homePageload()
                activeButton(btnHome)
            }
            else if (idButton == "btn-menu") {
                clearContainer()
                menuPageLoad()
                activeButton(btnMenu)
            }
            else if (idButton == "btn-about") {
                clearContainer()
                aboutPageLoad()
                activeButton(btnAbout)
            }
            console.log(e.target.id);
            
        })
    });
}

export { heroMaker , imageMaker, titleMaker, activeButton, handleBtnListener}