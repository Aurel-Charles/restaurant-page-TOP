import heroImageSrc from "./img/menu.jpg"
import {imageMaker, titleMaker, heroMaker} from "./utilities.js";
import { menuData } from "./menu-data.js";

// icons //
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils, faIceCream, faWineGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faUtensils, faIceCream, faWineGlass)
dom.watch()
// ----- //

function renderHero(container) {
    const hero = heroMaker(heroImageSrc, "Menu photo", "Module Menu")
    container.appendChild(hero)
}

function renderMenu(container) {
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')
    menuData.forEach(element => {  
        const categoryDiv = document.createElement('div')
        categoryDiv.classList.add('menu-category')

        const categoryIcon = document.createElement('i')
        let cat = element.category.toLowerCase()
        if (cat === "repas") {
            categoryIcon.classList.add('fas', 'fa-utensils')
        }
        if (cat === "desserts") {
            categoryIcon.classList.add('fas', 'fa-ice-cream')
        }
        if (cat === "boissons") {
            categoryIcon.classList.add('fas', 'fa-wine-glass')
        }
        
        categoryDiv.appendChild(categoryIcon)
        const categoryTitle = document.createElement('h2')
        categoryTitle.classList.add("category")
        categoryTitle.textContent = element.category
        categoryDiv.appendChild(categoryTitle)
        menuContainer.appendChild(categoryDiv)

        element.items.forEach(menuItem => {
            const itemDiv = document.createElement('div')
            itemDiv.classList.add('item-wrapper')

            const itemName = document.createElement('h3')
            itemName.textContent = menuItem.name
            itemName.classList.add('item-name')
            itemDiv.appendChild(itemName)
            
            const itemPrice = document.createElement('p')
            itemPrice.textContent =menuItem.price
            itemPrice.classList.add('item-price')
            itemDiv.appendChild(itemPrice)

            const itemDescription = document.createElement('p')
            itemDescription.textContent = menuItem.desc
            itemDescription.classList.add('item-description')
            itemDiv.appendChild(itemDescription)

            categoryDiv.appendChild(itemDiv)

        });
    });

    container.appendChild(menuContainer)
}



export function menuPageLoad() {
    const container = document.querySelector('#content')

    renderHero(container)
    renderMenu(container)
}