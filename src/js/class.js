export default class WeatherInYourCity {
  constructor(refs) {
    this.refs = refs;
  }

  getFetch(query) {
    let apiKey = `92ea27b69fe594992814661a3dcf252a`;
    const {
      city,
      temp,
      icon,
      description,
      weather,
      humidity,
      wind,
    } = this.refs;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) return alert("No weather data in this city");
        return response.json();
      })
      .then((data) => {
        city.textContent = `Weather in ${data.name}`;
        let tempC = Math.round(data.main.temp - 273.15);
        temp.textContent = `${tempC}°C`;
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        icon.alt = data.weather[0].description;
        description.textContent = data.weather[0].description;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind speed: ${data.wind.speed} km/h`;
        weather.classList.remove("loading");
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.name}')
    `;
      })
      .catch((error) => {
        console.log(error);
        console.log("Mistake");
      });
  }
  search() {
    const { input, btn, container } = this.refs;
    input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.getFetch(input.value);
        container.style.visibility = "hidden";
        input.value = "";
      }
    });

    btn.addEventListener("click", () => {
      this.getFetch(input.value);
      container.style.visibility = "hidden";
      input.value = "";
    });
  }
}
