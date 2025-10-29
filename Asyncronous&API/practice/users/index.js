const cont = document.getElementById("container");

// Función que obtiene los datos de un usuario simulando retraso
function getUserCard(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cardHTML = `
                <div class="user-card">
                    <p><span>Nombre:</span> ${user.name}</p>
                    <p><span>Usuario:</span> ${user.username}</p>
                    <p><span>Email:</span> ${user.email}</p>
                    <p><span>Ciudad:</span> ${user.address.city}</p>
                </div>
            `;
            if(!user.name) reject("Usuario vacío");
            resolve(cardHTML);
        }, 1000); // retraso de 1 segundo por usuario
    });
}

// Obtenemos todos los usuarios de la API
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const promises = users.map(user => getUserCard(user));
        return Promise.all(promises);
    })
    .then(cards => {
        cont.innerHTML = cards.join(''); // unimos todas las tarjetas
    })
    .catch(error => console.error("Error:", error));
