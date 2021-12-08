// creating an object for storing the fucntions and varialbes that will necessary for using the API

// first we will need an APIkey to access the weather

let weather = {
  apiKey: "919772674a410ea4ddc52c4846c58b50",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
       + city 
       + "&units=metric&appid=" 
       + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
// new function that will display the weather on the page
displayWeather: function(data){
const { name } = data;
const { icon, description } = data.weather[0]; 
const { temp, humidity } = data.main;
const { speed } = data.wind
console.log(name,icon,description,temp, humidity, speed)
document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
document.querySelector(".description").innerText = description
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage =
  "url(https://source.unsplash.com/1600x900/?" + name + ")"
},
 search: function(){
this.fetchWeather(document.querySelector(".search-bar").value);
 }
};
  

document.querySelector(".search button").addEventListener('click', function(){
weather.search(); 
});

document.querySelector(".search-bar").addEventListener('keyup', function(){
  if (event.key == "Enter")
  weather.search();
  
});

weather.fetchWeather("Denver"); 