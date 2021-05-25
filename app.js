const inputBoxValue = document.getElementById('search-input');

function weatherApp() {
    getWeather(inputBoxValue.value);
    let weatherDiv = document.getElementById('weather-div');
    weatherDiv.style.display = 'block';
}



function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2e4dac51f2ff0ee2cf69353d74d4936&units=metric`)
        .then(response => response.json())
        .then(showWeather);
}

function showWeather(data) {
    let city = document.getElementById('city');
    let temperature = document.getElementById('temp');
    let clouds = document.getElementById('clouds');
    let iconImage = document.getElementById('icon-image');

    city.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = Math.round(data.main.temp);
    clouds.innerText = data.weather[0].main;

    let bgImage = document.body.style;
   
    let iconId = data.weather[0].id;
    // console.log(iconId);
    if (iconId <= 232 && iconId >= 201) {
        iconImage.src = "images/thunderstorm.png"
        
    }
    if (iconId <= 321 && iconId >= 300) {
        iconImage.src = "images/drizzle.png"
    }
    if (iconId <= 531 && iconId >= 500) {
        iconImage.src = "images/rain.png"
    }
    if (iconId <= 622 && iconId >= 600) {
        iconImage.src = "images/snow.png"
    }
    if (iconId <= 781 && iconId >= 701) {
        iconImage.src = "images/haze.png"
    }
    if (iconId <= 804 && iconId >= 801) {
        iconImage.src = "images/clouds.png";
        bgImage.backgroundImage = "url('images/bg-cloud.jpg')"
    }
    if (iconId == 800) {
        iconImage.src = "images/clear.png";
        bgImage.backgroundImage = "url('images/bg-clear.jpg')";
    }

    // console.log(data);
}







