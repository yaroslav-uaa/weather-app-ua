import css from "./css/styles.css";
import refs from "./js/refs.js";
// import "./js/fetch.js";
import WeatherInYouCity from "./js/class.js";

const myWeatherApp = new WeatherInYouCity(refs);
myWeatherApp.search();
