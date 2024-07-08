
const apikey = "96b4c4d574a08aa2a1c26b2cde26a472";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searhBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
     
    if(response.status == 404){
        document.querySelector(".error h1").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else{
        document.querySelector(".error h1").style.display ="none";
        document.querySelector(".weather").style.display ="block";
    }
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°c"; 
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"Km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcons.src="clouds.png" ;

    }
    else if(data.weather[0].main == "Rain"){
        weatherIcons.src="rain2.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcons.src="snow.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcons.src="sun.png" ;
    }

    document.querySelector(".weather").style.display = "flex";
    
}

searhBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
}
)



