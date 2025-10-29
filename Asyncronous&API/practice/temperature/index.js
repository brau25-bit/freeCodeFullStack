const btn = document.getElementById("btn-buscar")
const inputCity = document.getElementById("city-input")
const contWeather = document.getElementById("weather")

async function fetchWeather(cityName) {
    try {
        const apiKey = "e7898f8ddd32ab0d2bcfb088652f1a6c"
        
        
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`);
        if(!response.ok) throw new Error("Failed to load coordinates");

        const data = await response.json();
        if (!data[0]) throw new Error("Ciudad no encontrada");

        const {lat, lon} = data[0];

        const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        if(!responseWeather.ok) throw new Error("Failed to load weather data");

        const dataWeather = await responseWeather.json();

        return dataWeather
        
    } catch (error) {
        console.log("Error:", error.message);
    }
}

btn.addEventListener("click", function(){

    let city = inputCity.value
    if(city === "") throw new Error(alert("No city especified"))

    fetchWeather(city).then(data => {

        let content = `
            <p id="temp">${data.main.temp} °C</p>
            <p id="clima">${data.weather[0].description}</p>
            <p id="city">${city}</p>
        `

        contWeather.innerHTML = content
    })
    .catch(error => {
        console.log(error.message)
    })

    
})

fetchWeather("Ciudad de México");
