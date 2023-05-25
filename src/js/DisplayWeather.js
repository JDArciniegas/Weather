// UI Elements

const location = document.querySelector("#location");
const temperature = document.querySelector("#temp-icon");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const todayDate = document.querySelector("#today-date");
const humidity = document.querySelector('#humidity');
const conditions = document.querySelector("#conditions");
const windSpeed = document.querySelector("#wind-speed");

// global funtion actioned with event
const DisplayWeather = (data) => {
  updateLocationDisplay(data.location.name);
  updateTemp(data.current.temp_c, data.current.condition.icon);
  updateFeelsLikeTemp(data.current.feelslike_c);
  udpateDate();
  udpateHumidity(data.current.humidity)
  udpateConditions(data.current.condition.text)
  udpateWindSpeed(data.current.wind_kph);
};

// update name of city
const updateLocationDisplay = (data) => {
  location.innerText = data;
}

// update temperature & icon
const updateTemp = (data, icon) => {
  temp.innerText = data
  updateTempIcon(icon);
}

const updateFeelsLikeTemp = (data, icon) => {
  feelsLike.innerText = data
}

const updateTempIcon = (data) => {
  temperature.setAttribute('src', data);
}

// update date
const udpateDate = () => {
  let date = new Date();
  todayDate.innerText = date;
}

const udpateHumidity = (data) => {
  humidity.innerText = data + "%";
}

const udpateConditions = (data) => {
  conditions.innerText = data;
};



const udpateWindSpeed = (data) => {
  windSpeed.innerText = data + 'km/h';
};

export default DisplayWeather;
  //     <!-- conditions -->
  //     <p id="conditions">Sunny</p>

  //     <!-- chance of Rain -->
  //     <p id="rain">0%</p>
  //     <!-- wind Speed -->
  //     <p id="wind-speed">50 KM/H</p>
