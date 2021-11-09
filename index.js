let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ];
            let date = new Date();
            let currentHour = date.getHours();
            let currentMinute = date.getMinutes();
            if (currentMinute < 10) {
                currentMinute = `0${currentMinute}`;
            }
            let currentDay = days[date.getDay()];
            let currentDateTime = `${currentDay}, ${currentHour}:${currentMinute}`;
            let replaceDate = document.querySelector("#dateTime");
            replaceDate.innerHTML = currentDateTime;
   
   
// week 5 
// function to receive city name
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#enterCity");
  console.log(input.value);
  getAxios(input.value);
}
// function to put city name in axios
function getAxios(city) {
  let apiKey = `8353ade9addf499759b0ef3e125b6398`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showCityWeather);
}
// function to display city name and axios info
function showCityWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#majorCity");
  let input = document.querySelector("#enterCity");
  let city = input.value;
  h1.innerHTML = `It is ${temp} degrees in ${city}`;
  console.log(temp);
}

let searching = document.querySelector("#searchEngine");
searching.addEventListener("submit", searchCity);
