import bootstrap from "bootstrap";
import "./style.css";
import forecast from "./js/WeatherApi";
function component() {
  const element = document.getElementById("content");
  return element;
}
const form = document.querySelector("form");
const input = document.querySelector("#location-search");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  forecast(input.value);
});

document.body.appendChild(component());
