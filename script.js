const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const display = document.querySelector(".display"); 
const wind = document.querySelector(".wind"); 

button.addEventListener("click", function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=60ec613bb09f2372e00e7efc4ddc7a50')
    .then(response => response.json())
    .then(data =>
      // console.log(data)
    {
      var nameValue = data.name;
      var descValue = `( Desc : ${data.weather[0].description} )`;
      var tempValue = `Temp : ${data.main.temp}°C`;
      var humidityValue = `Humidity : ${data.main.humidity}%`;
      var windValue= `Wind : ${data.wind.speed}km/hr`;

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
    desc.innerHTML = descValue;
    humidity.innerHTML = humidityValue;
     wind.innerHTML = windValue;
      
      display.style.display = "block";
  }
)
    .catch(error => alert("Invalid city name"));
});
