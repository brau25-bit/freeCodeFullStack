const input = document.getElementById("input-search");
const cont = document.querySelector(".results");
const btnSearch = document.getElementById("search");
const btnLoad = document.getElementById("load");

let allPosts = [];
let displayedCount = 0; // Controla cuántos se han mostrado
const step = 10; // Cuántos mostrar por clic

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Error al obtener los datos")
        }
        const data = await response.json()

        allPosts = data;
        showData(allPosts.slice(0, step))
        displayedCount = step

    } catch (error) {
        console.log("Error:", error.message)
    }
}

function showData(data) {
    cont.innerHTML = "";
    let values = "";
    data.forEach(element => {
        values += `
            <div class="card-container">
                <p><strong>Title:</strong> ${element.title}</p>
                <p><strong>Content:</strong> ${element.body}</p>
            </div>
        `;
    });
    cont.innerHTML = values;
}


btnLoad.addEventListener("click", () => {
    const nextPosts = allPosts.slice(displayedCount, displayedCount + step);
    if (nextPosts.length === 0) {
        alert("No hay más posts por mostrar");
        return;
    }
    displayedCount += nextPosts.length;


    let html = "";
    nextPosts.forEach(element => {
        html += `
            <div class="card-container">
                <p><strong>Title:</strong> ${element.title}</p>
                <p><strong>Content:</strong> ${element.body}</p>
            </div>
        `;
    });
    cont.innerHTML += html;
});


btnSearch.addEventListener("click", () => {
    const query = input.value.toLowerCase();
    const filtered = allPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    );

    displayedCount = filtered.length;
    cont.innerHTML = ""
    showData(filtered);
});

fetchData();
