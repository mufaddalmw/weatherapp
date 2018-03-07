import axios from 'axios';
import $, {jQuery} from 'jquery';
import './scss/main.scss';

let apiKey = 'e3d241b4c80e6e87dcaa0979d11b47cc';
let city = 'toronto';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// Make a request for a user with a given ID
axios.get(url).then(function (response) {

    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let description = response.data.weather[0].description;
    let icon = response.data.weather[0].icon;
    let temp = response.data.main.temp - 273.15;
    let humidity = response.data.main.humidity;
    let windspeed = response.data.wind.speed;
    let country = response.data.sys.country;
    let sunrise = response.data.sys.sunrise;
    let sunset = response.data.sys.sunset;
    let city = response.data.name;

    temp = temp.toFixed(2);
    sunrise = new Date(sunrise * 1000);
    let sunriseMinutes = sunrise.getMinutes();
    let sunriseHour = sunrise.getHours();

    sunset = new Date(sunset * 1000);
    let sunsetMinutes = sunset.getMinutes();
    let sunsetHour = sunset.getHours();


    $('[data-id="city"]').text(`${city}, ${country}`);
    $('[data-id="icon"]').attr('src', `http://openweathermap.org/img/w/${icon}.png`);
    $('[data-id="description"]').text(description);
    $('[data-id="temp"]').text(`Temp: ${temp} ℃`);
    $('[data-id="humidity"]').text(`Humidity : ${humidity}%`);
    $('[data-id="windspeed"]').text(`Windspeed : ${windspeed}`);
    $('[data-id="sunrise"]').text(`Sunrise : ${sunriseHour}:${sunriseMinutes}`);
    $('[data-id="sunset"]').text(`Sunset : ${sunsetHour}:${sunsetMinutes}`);
    
    // $('[data-id="sunset"]').text(sunset);
    

    // console.log(response.data);
    // console.log(response.data.coord.lon);
    // console.log(response.data.coord.lon);
    // console.log(response.data.weather[0].description);
    // console.log(response.data.weather[0].icon);
    // console.log(response.data.main.temp - 273.15);
    // console.log(response.data.main.humidity);
    // console.log(response.data.wind.speed);
    // console.log(response.data.sys.country);
    // console.log(response.data.sys.sunrise);
    // console.log(response.data.sys.sunset);
    // console.log(response.data.name);

})
.catch(function (error) {
    console.log(error);
});