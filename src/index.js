import axios from 'axios';

let apiKey = 'e3d241b4c80e6e87dcaa0979d11b47cc';
let city = 'dubai';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// Make a request for a user with a given ID
axios.get(url)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });