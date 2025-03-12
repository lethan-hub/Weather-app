const apiKey = "dddb072b936fc835bfc2defcbc0129e7"; 
const searchBtn = document.getElementById("searchBtn"); 
const cityInput = document.getElementById("cityInput"); 
const weatherResult = document.getElementById("weatherResult"); 
;


searchBtn.addEventListener("click", () => {  
    const city = cityInput.value; // Gets what the user typed
    if (city) {  
        getWeather(city); // Calls the function to get weather
    } else {  
        alert("Please enter a city name"); // Shows alert if input is empty
    }
});

async function getWeather(city) {
    try {
        // 🌎 Making a request to OpenWeather API
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json(); // 📦 Convert response to JSON
        
        if (data.cod === "404") { // If city is not found, it will execute City not found
            weatherResult.innerHTML = `<p>City not found. Try again.</p>`;
            return;
        }

        const tempCelsius = data.main.temp;
        const tempFahrenheit = (tempCelsius * 9/5 + 32)

    

        // ✅ If city is found, show weather
        weatherResult.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${tempFahrenheit.toFixed(1)}°F</p>
            <p>Weather: ${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
        `;
    } catch (error) {
        weatherResult.innerHTML = `<p>Something went wrong. Please try again.</p>`;
    }
}

function darkMode(){
    document.body.classList.toggle("dark-mode");
}
