const apiKey="b896ad33de3ea4121c54eaf1666b3d27";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon img");



async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
    var data= await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png";
        document.body.style.backgroundImage="url('images/cloudsbg.png')";
        document.body.style.backgroundSize ="cover";
    }
    else if(data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png";
    document.body.style.backgroundImage="url('images/clearbg.png')";
    document.body.style.backgroundSize ="cover";
    }
    else if(data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png";
    document.body.style.backgroundImage="url('images/rainbgmain.png')";
    document.body.style.backgroundSize ="cover";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png";
        document.body.style.backgroundImage="url('images/rainbg.png')";
        document.body.style.backgroundSize ="cover";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png";
        document.body.style.backgroundImage="url('images/mistbg.png')";
        document.body.style.backgroundSize ="cover";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}
    

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
