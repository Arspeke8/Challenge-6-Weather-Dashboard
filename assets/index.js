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
      alert(data.main.temp);
      // TODO: Instead of alerting, you can modify existing HTML with getElementbyID or querySelector... For example, document.getElementByID("something").innerText = data.main.temp;
    });
};
searchButton.addEventListener("click", searchCity);
