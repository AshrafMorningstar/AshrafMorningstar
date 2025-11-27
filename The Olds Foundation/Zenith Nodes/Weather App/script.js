
const apiKey = "a7d54d322644f9328e8e4691846c62f2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_img");


async function checkWeather (city){
  const response = await fetch (apiURL + city +`&appid=${apiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src="./Assets/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src="./Assets/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src="./Assets/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src="./Assets/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src="./Assets/mist.png";
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

  }
}
searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})


// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar