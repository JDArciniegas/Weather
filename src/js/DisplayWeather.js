const location = document.querySelector("#location");
const temperature = document.querySelector("#temp");
const tempIcon = document.createElement('img');

const DisplayWeather = (loc, temp) => {
  location.innerText = loc;
  tempIcon.setAttribute('src',temp)
  temperature.appendChild(tempIcon);
};

export default DisplayWeather;
