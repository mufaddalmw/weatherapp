import axios from 'axios';
import $, {jQuery} from 'jquery';
import './scss/main.scss';

let apiKey = 'e3d241b4c80e6e87dcaa0979d11b47cc';
let city = 'dubai';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// Make a request for a user with a given ID
axios.get(url).then(function (response) {
    
    $('[data-id]').text(response.data.name);
    

    console.log(response.data);
    console.log(response.data.coord.lon);
    console.log(response.data.coord.lon);
    console.log(response.data.weather[0].description);
    console.log(response.data.weather[0].icon);
    console.log(response.data.main.temp - 273.15);
    console.log(response.data.main.humidity);
    console.log(response.data.wind.speed);
    console.log(response.data.sys.country);
    console.log(response.data.sys.sunrise);
    console.log(response.data.sys.sunset);
    console.log(response.data.name);

})
.catch(function (error) {
    console.log(error);
});