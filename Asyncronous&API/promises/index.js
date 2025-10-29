async function preLoadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.addEventListener("load", () => resolve(img))
        img.addEventListener("error", () => reject("Error al cargar la imagen"))
    })
}

async function loadImage() {
    try {
        const result = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
        console.log(result)
        document.getElementById('img-container').appendChild(result)
    } catch (err) {
        console.log(err)
    }
}

loadImage()
