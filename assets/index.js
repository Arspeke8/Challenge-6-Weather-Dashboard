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
var cityName = [];
var APIKey = "1c8e99a8b00221d888bd9d8829968388";
var requestUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial";
var searchButton = document.getElementById("search-button");
//var cityThatisClicked = cityName[i];

searchCity = function () {
  var searchText = document.getElementById("user-input");
  var currentCity = searchText.value;
  var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial`;
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
          //Current Day date
          document.getElementById("today").innerText =
            "Date:" + [data.list[0].dx_txt] + " " + "2022";
          console.log([data.list[0]]);
          //Day 1
          document.getElementById("T-2").innerText =
            "Temp:" + [data.list[0].main.temp] + " " + "F°";
          document.getElementById("W-2").innerText =
            "Wind:" + [data.list[0].wind.speed] + "MPH";
          document.getElementById("H-2").innerText =
            "Humidity:" + [data.list[0].main.humidity] + "%";
          //Day 2
          document.getElementById("T-3").innerText =
            "Temp:" + [data.list[1].main.temp] + " " + "F°";
          document.getElementById("W-3").innerText =
            "Wind:" + [data.list[1].wind.speed] + "MPH";
          document.getElementById("H-3").innerText =
            "Humidity:" + [data.list[1].main.humidity] + "%";
          //Day 3
          document.getElementById("T-4").innerText =
            "Temp:" + [data.list[2].main.temp] + " " + "F°";
          document.getElementById("W-4").innerText =
            "Wind:" + [data.list[2].wind.speed] + "MPH";
          document.getElementById("H-4").innerText =
            "Humidity:" + [data.list[2].main.humidity] + "%";
          //Day 4
          document.getElementById("T-5").innerText =
            "Temp:" + [data.list[3].main.temp] + " " + "F°";
          document.getElementById("W-5").innerText =
            "Wind:" + [data.list[3].wind.speed] + "MPH";
          document.getElementById("H-5").innerText =
            "Humidity:" + [data.list[3].main.humidity] + "%";
          //Day 5
          document.getElementById("T-6").innerText =
            "Temp:" + [data.list[4].main.temp] + " " + "F°";
          document.getElementById("W-6").innerText =
            "Wind:" + [data.list[4].wind.speed] + "MPH";
          document.getElementById("H-6").innerText =
            "Humidity:" + [data.list[4].main.humidity] + "%";
          //saves currentCity to cityName array global variable
          cityName.push(currentCity);
          console.log(cityName);
          //saves cityName array to local storage
          localStorage.setItem("cityName", JSON.stringify(cityName));
          //need array cityName to be displayed in html ("search-history")
          // need array cityName to be displayed in html ("search-history") in a list one after another

          // get item from local storage

          var list = document.createElement("li");
          for (var i = 0; i < cityName.length; i++) {
            list.innerHTML = cityName[i];
            document.getElementById("search-history").appendChild(list);
            /*
  const requestUrlfive = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial`;
      console.log(requestUrlfive);

      fetch(requestUrlfive)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("Fetch Response \n-------------");
          console.log(data);
  */ //need to add event listener to each list item
            list.addEventListener("click", function (event) {
              event.preventDefault();
              console.log("click");
              console.log(event.target);
              console.log(event.target.textContent);
              var cityThatisClicked = event.target.textContent;
              console.log(cityThatisClicked);
              var requestUrls = `https://api.openweathermap.org/data/2.5/weather?q=${cityThatisClicked}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial`;
              console.log(requestUrls);

              fetch(requestUrls).then(function (response) {
                return response.json();
              });
              console.log("Fetch Response \n-------------");
              console.log(data);
              document.getElementById("T-1").innerText =
                "Temp:" + data.main.temp + " " + "F°";
              console.log(data.main.temp);
              document.getElementById("W-1").innerText =
                "Wind:" + data.wind.speed + "MPH";
              document.getElementById("H-1").innerText =
                "Humidity:" + data.main.humidity + "%";
              console.log(data.coord.lat);
              console.log(data.coord.lon);
              const lats = data.coord.lat;
              const lons = data.coord.lon;
              console.log(lats);
              console.log(lons);
              const requestUrlfives = `https://api.openweathermap.org/data/2.5/forecast?lat=${lats}&lon=${lons}&appid=1c8e99a8b00221d888bd9d8829968388&units=imperial`;
              console.log(requestUrlfives);

              fetch(requestUrlfives)
                .then(function (response) {
                  return response.json();
                })
                .then(function (data) {
                  console.log("Fetch Response \n-------------");
                  console.log(data);
                  //Current Day date
                  document.getElementById("today").innerText =
                    "Date:" + [data.list[0].dx_txt] + " " + "2022";
                  console.log([data.list[0]]);
                  //Day 1
                  document.getElementById("T-2").innerText =
                    "Temp:" + [data.list[0].main.temp] + " " + "F°";
                  document.getElementById("W-2").innerText =
                    "Wind:" + [data.list[0].wind.speed] + "MPH";
                  document.getElementById("H-2").innerText =
                    "Humidity:" + [data.list[0].main.humidity] + "%";
                  //Day 2
                  document.getElementById("T-3").innerText =
                    "Temp:" + [data.list[1].main.temp] + " " + "F°";
                  document.getElementById("W-3").innerText =
                    "Wind:" + [data.list[1].wind.speed] + "MPH";
                  document.getElementById("H-3").innerText =
                    "Humidity:" + [data.list[1].main.humidity] + "%";
                  //Day 3
                  document.getElementById(" T-4").innerText =
                    "Temp:" + [data.list[2].main.temp] + " " + "F°";
                  document.getElementById("W-4").innerText =
                    "Wind:" + [data.list[2].wind.speed] + "MPH";
                  document.getElementById("H-4").innerText =
                    "Humidity:" + [data.list[2].main.humidity] + "%";
                  //Day 4
                  document.getElementById("T-5").innerText =
                    "Temp:" + [data.list[3].main.temp] + " " + "F°";
                  document.getElementById("W-5").innerText =
                    "Wind:" + [data.list[3].wind.speed] + "MPH";
                  document.getElementById("H-5").innerText =
                    "Humidity:" + [data.list[3].main.humidity] + "%";
                  //Day 5
                  document.getElementById("T-6").innerText =
                    "Temp:" + [data.list[4].main.temp] + " " + "F°";
                  document.getElementById("W-6").innerText =
                    "Wind:" + [data.list[4].wind.speed] + "MPH";
                  document.getElementById("H-6").innerText =
                    "Humidity:" + [data.list[4].main.humidity] + "%";
                });
            });
          }
        });
    });
};

//need to add event listener to each list item
// TODO: Instead of alerting, you can modify existing HTML with getElementbyID or querySelector... For example, document.getElementByID("something").innerText = data.main.temp;

searchButton.addEventListener("click", searchCity);
