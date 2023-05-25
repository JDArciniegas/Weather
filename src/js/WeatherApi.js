import DisplayWeather from "./DisplayWeather";

const KEY = `49a4e51368a64883b1834202232305`;

 const forecast = (location) => {
  fetch(`http://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${location}&days=14`)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      DisplayWeather(response);
      console.log(response);
    });
};

export default forecast;
