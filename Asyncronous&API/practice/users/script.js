const container = document.getElementById("container")

async function fetchData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error()
        }
        const data = await response.json()
        return data

    } catch(error){
        console.log(error.message)
    }

}

function sortData(arr){
    return arr.sort((a,b) => {
        if(a.name > b.name){
            return 1
        }
        if(b.name > a.name){
            return -1
        }

        return 0
    })
}

fetchData()
.then(value => {
    return sortData(value)
})
.then(data => {
    let users = ""

    data.forEach(element => {
        users += `<p>Name: ${element.name}, Username: ${element.username}, Email: ${element.email}</p>`
    });

    container.innerHTML = users
})
.catch(error => {
    console.log(error.message)
})