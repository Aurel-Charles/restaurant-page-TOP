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


export { heroMaker , imageMaker, titleMaker}