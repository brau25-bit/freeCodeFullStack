# 🌐 Ejercicios de Consumo de APIs con JavaScript (Fetch & Async/Await)

Este repositorio contiene una serie de **10 ejercicios prácticos** para aprender a consumir datos desde APIs públicas utilizando **JavaScript moderno** (`fetch`, `async/await`, `Promise.all`, etc.).

Cada ejercicio incluye una breve descripción, el objetivo, el endpoint utilizado y si requiere o no una **API Key**.

---

## 📋 Tabla de Ejercicios

| Nº | Ejercicio | Descripción | Endpoint/API | API Key | Dificultad |
|----|------------|--------------|---------------|----------|-------------|
| 1️⃣ | **Usuarios ordenados alfabéticamente** | Obtén una lista de usuarios y muéstralos en orden alfabético. | `https://jsonplaceholder.typicode.com/users` | ❌ No | 🟢 Fácil |
| 2️⃣ | **Búsqueda y carga de posts** | Muestra los primeros 10 posts, permite buscar por palabra clave y cargar más. | `https://jsonplaceholder.typicode.com/posts` | ❌ No | 🟡 Media |
| 3️⃣ | **Clima actual por ciudad** | Obtén el clima de cualquier ciudad usando coordenadas. | `https://api.openweathermap.org/data/2.5/weather` | ✅ Sí | 🟠 Media |
| 4️⃣ | **Detalles de usuario (API Random User)** | Muestra nombre, email y foto de perfil de varios usuarios aleatorios. | `https://randomuser.me/api/?results=10` | ❌ No | 🟢 Fácil |
| 5️⃣ | **Listado de Pokémon** | Muestra nombres e imágenes de los primeros 20 Pokémon. | `https://pokeapi.co/api/v2/pokemon` | ❌ No | 🟢 Fácil |
| 6️⃣ | **Información de criptomonedas** | Muestra el valor actual de Bitcoin, Ethereum, etc. | `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd` | ❌ No | 🟠 Media |
| 7️⃣ | **Noticias recientes** | Obtén los titulares de noticias más recientes por país. | `https://newsapi.org/v2/top-headlines?country=mx&apiKey=YOUR_KEY` | ✅ Sí | 🔴 Difícil |
| 8️⃣ | **Fotos aleatorias (Unsplash)** | Carga imágenes aleatorias y muéstralas en tarjetas. | `https://api.unsplash.com/photos/random?count=10&client_id=YOUR_KEY` | ✅ Sí | 🟠 Media |
| 9️⃣ | **Frases motivacionales** | Muestra una frase motivacional aleatoria. | `https://type.fit/api/quotes` | ❌ No | 🟢 Fácil |
| 🔟 | **Conversor de divisas** | Convierte montos entre monedas usando una API de tipo de cambio. | `https://api.exchangerate-api.com/v4/latest/USD` | ❌ No | 🟠 Media |

---

## 🚀 Requisitos

- Navegador moderno compatible con `fetch` y `ES6`.
- Editor de código (VSCode recomendado).
- Conexión a Internet.

---

## 🧠 Recomendaciones

- Usa `try...catch` para manejar errores de red.
- Utiliza `async/await` en lugar de `.then()` para código más limpio.
- Si una API requiere **API Key**, regístrate gratuitamente en su sitio oficial.
- Implementa `loading states` o mensajes de error para mejorar la experiencia de usuario.

---

## 📦 Siguientes pasos

Puedes crear un archivo `index.html` y `index.js` para cada ejercicio.  
Ejemplo de estructura:

```
/ejercicio1
  ├── index.html
  ├── index.js
  ├── style.css
/ejercicio2
  ├── index.html
  ├── index.js
  ├── style.css
...
README.md
```

---

## 📚 Créditos

Estos ejercicios están pensados para práctica personal y educativa en **JavaScript moderno**.  
APIs públicas obtenidas de [public-apis.io](https://public-apis.io) y documentación oficial de cada servicio.

---
