const button = document.querySelector(".button");
const inputValue = document.querySelector(".inputValue");
const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const display = document.querySelector(".display"); 

button.addEventListener("click", function () {
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=metric&appid=60ec613bb09f2372e00e7efc4ddc7a50')
    .then(response => response.json())
  .then(data => 
    {
      var nameValue = data.name;
      var descValue = data.weather[0].description;
      var tempValue = `${data.main.temp}°C`;

      name.innerHTML = nameValue;
      temp.innerHTML = tempValue;
      desc.innerHTML = descValue;

      
      display.style.display = "block";
  }
)
    .catch(error => alert("Invalid city name"));
});
