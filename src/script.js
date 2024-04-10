document.getElementById("weatherForm").addEventListener("submit", async function (event){

    event.preventDefault();

    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postalCode").value;
    const country = document.getElementById("country").value;

    if(city === ""){

        alert("El camp carrer és obligatori");
        return;

    }

    try{

        const apiKey = "";
        const currentWeatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&country=${country}&aqi=no`;
        const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&country=${country}&days=2`;

        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl)
        ]);

        const [currentData, forecastData] = await Promise.all([
           currentResponse.json(),
           forecastResponse.json(),
        ]);

        const weatherData = {

            current: {
                temperature: `${currentData.current.temp_c}ºC`,
                weatherDescription: currentData.current.condition.text,
                weatherIcon: currentData.current.condition.icon,
                region: currentData.location.region,
                city: currentData.location.name,
                country: currentData.location.country
            }
        }

        displayWeatherResults(weatherData);

    }catch(error){
        console.log("Error en la petició a l'API: ", error);
    }

    function displayWeatherResults(weatherData){
        const resultContainer = document.getElementById("weatherResults");
        const currentTemperatureElement = document.getElementById("temperature");
        const currentWeatherDescriptionElement = document.getElementById("weatherDescription");
        const currentWeatherIconElement = document.getElementById("weatherIcon");
        const currentLocationElement = document.getElementById("location");
        const forecastTemperatureElement = 

    }



})