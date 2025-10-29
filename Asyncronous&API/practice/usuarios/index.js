const cont = document.querySelector(".container")

async function users() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=10")
        if(!response.ok) throw new Error("Failed to get data")

        const data = await response.json()

        console.log(data)

        loadData(data)
    } catch (error) {
        console.log(error.message)
    }
}

function loadData(data){
    let users = ""

    data.results.forEach(element => {
        users += `
            <div class="usuarios">
                <p>${element.name.first}</p>
                <p>${element.email}</p>
                <div id="img">
                    <img src="${element.picture.large}">
                </div>
            </div>
        `
    })

    cont.innerHTML = users
}

users()