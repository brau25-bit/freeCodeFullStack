function getImagePromise(url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const img = new Image()
            img.src = url
            img.addEventListener("load", () => resolve(img))
            img.addEventListener("error", () => reject(new Error(`failed to load image: ${url}`)))
        }, 500);
    })
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
]

async function preloadImages(imagesArr) {
    const imageContainer = document.getElementById("img-container")
    const uploadContainer = document.getElementById("upload-container")

    try {
        const promises = imagesArr.map(url => getImagePromise(url))
        const results = await Promise.all(promises)

        console.log("Operation successful")
        //uploadContainer.style.visibility = 'hidden'

        results.forEach(img => imageContainer.appendChild(img))
    } 
    catch (err) {
        alert("An error has been found: " + err)
    }
}




document.getElementById("submit-imgs").addEventListener("click", () => preloadImages(images))