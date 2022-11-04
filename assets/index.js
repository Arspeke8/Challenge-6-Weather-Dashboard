/*
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city


5 day forecast

https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial


Geocoding to convert city name into lat and Lon

https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1c8e99a8b00221d888bd9d8829968388

*/
var CityName = "";
var APIKey = "1c8e99a8b00221d888bd9d8829968388";
var requestUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial";
var searchButton = document.getElementById("search-button");

searchCity = function () {
  var searchText = document.getElementById("user-input");
  var cityName = searchText.value;
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetch Response \n-------------");
      console.log(data);
      document.getElementById("T-1").innerText =
        "Temp:" + data.main.temp + " " + "F°";
      //document.getElementById("W-1").innerText = "Wind:" + data.main;
      document.getElementById("W-1").innerText =
        "Wind:" + data.wind.speed + "MPH";
      document.getElementById("H-1").innerText =
        "Humidity:" + data.main.humidity + "%";
      console.log(data.coord.lat);
      console.log(data.coord.lon);
    });
};
const lat = data.coord.lat;
const lon = data.coord.lon;
console.log(lat);
console.log(lon);
const requestUrlfive = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial`;
console.log(requestUrlfive);

fetch(requestUrlfive)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Fetch Response \n-------------");
    console.log(data);

    // TODO: Instead of alerting, you can modify existing HTML with getElementbyID or querySelector... For example, document.getElementByID("something").innerText = data.main.temp;
  });

/*function fiveCity() {
  var fiveText = document.getElementById("user-input");
  var fiveCityname = searchText.value;
  var requestUrlfive = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1c8e99a8b00221d888bd9d8829968388`;
  fetch(requestUrlfive)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Fetch Response \n-------------");
      console.log(data);
    });
}
*/
searchButton.addEventListener("click", searchCity);
