const location = document.querySelector("#location");
const temperature = document.querySelector("#temp-icon");

const DisplayWeather = (loc, temp) => {
  location.innerText = loc;
  temperature.setAttribute('src',temp)
};

export default DisplayWeather;
