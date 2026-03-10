import heroImageScr from "./img/about.jpg"
import { info, hours } from "./restaurant-data.js";
import { heroMaker } from "./utilities.js";
import { format } from "date-fns";

function renderHero(container) {
    const hero =  heroMaker(heroImageScr, "Bar view", "Come Auround !")
    container.appendChild(hero)
}

function renderAddress(container) {
    const infoDiv = document.createElement('div')
    infoDiv.classList.add('info-container')

    const infoName = document.createElement('h3')
    infoName.textContent = info.name
    infoName.classList.add('info-name')
    infoDiv.appendChild(infoName)

    const infoAddress = document.createElement('p')
    infoAddress.textContent = info.address
    infoAddress.classList.add('info-address')
    infoDiv.appendChild(infoAddress)

    const infoZip = document.createElement('p')
    infoZip.textContent = info.zipcode
    infoZip.classList.add('info-zipcode')
    infoDiv.appendChild(infoZip)

    const infoCity = document.createElement('p')
    infoCity.textContent = info.city
    infoCity.classList.add('info-city')
    infoDiv.appendChild(infoCity)

    container.appendChild(infoDiv)
}

function renderHours(container) {
    let today = format(new Date(), "eeee")
    today = today.toLowerCase()

    const hoursDiv = document.createElement('div')
    hoursDiv.classList.add('hours-container')

    hours.forEach(element => {
        const dayDiv = document.createElement('div')
        if (today === element.day.toLowerCase()) {
            dayDiv.classList.add('today')
        }
        const day = document.createElement('p')
        day.textContent = element.day
        const time = document.createElement('p')
        time.textContent = element.time

        dayDiv.appendChild(day)
        dayDiv.appendChild(time)
        
        hoursDiv.appendChild(dayDiv)
    });

    container.appendChild(hoursDiv)
}

export function aboutPageLoad() {
    const container = document.querySelector('#content')
    renderHero(container)
    renderAddress(container)
    renderHours(container)
}

