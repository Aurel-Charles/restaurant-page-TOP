
import heroImageSrc from "./img/hero.jpg"
import { heroMaker } from "./utilities.js";

function renderHero(container) {
    const hero = heroMaker(heroImageSrc, "The Bundle Bistro room view", "The Bundle Bistro")
    container.appendChild(hero)
}

function heroDescription(container) {
    const heroDescriptionContainer = document.createElement('div')
    const description = [
        {type: "title", content: "Everything stays together." },
        {type: "subtitle", content: "The Vibe" },
        {type: "content", content: `A modern, high-tech industrial eatery where different global flavors are seamlessly "bundled" into single, cohesive dishes. The decor features exposed wiring (aesthetic, of course) and modular furniture that can be reconfigured at a moment's notice.` },
        {type: "subtitle", content: "The Description" },
        {type: "content", content: `At The Bundle Bistro, we believe that the best experiences are more than the sum of their parts—they are optimized for performance. We take raw, disparate ingredients from local sources and process them through our signature culinary pipeline to deliver a high-speed, high-flavor dining experience.
        
        From our "Dependency Dumplings" to our "Hot Module Replacement" spicy ramen—which is served so fast it feels like the bowl updated while you were looking at it—we ensure that every bite is minified for maximum impact and zero bloat. No messy side effects, just clean, delicious code... we mean, food.`},
    ]
    description.forEach(elements => {
        let section
        if (elements.type == "title") {
            section = document.createElement('h1')
        }
        else if (elements.type == "subtitle") {
            section = document.createElement('p')
            section.classList.add('subtitle')
        }
        else if (elements.type == "content") {
            section = document.createElement('p')
            section.classList.add('content')
        }
        section.textContent = elements.content
        heroDescriptionContainer.appendChild(section) 
    });
    heroDescriptionContainer.classList.add('hero-description')
    container.appendChild(heroDescriptionContainer) 
}

export function homePageload() {
    const container = document.querySelector('#content')
    
    renderHero(container)
    heroDescription(container)
}