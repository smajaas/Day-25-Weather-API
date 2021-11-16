//Assign my apiKey to retreive data using my unique Api key

let weather = {   
    apiKey:"6e65122a9ce0fa8a0c46fd3b8f23626a",
 
    //Create a function to fetch the data from this API by city name
   fetchWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        )
//Use then to handle readable format or Promise to Json and the print it
 .then((response)=>response.json())
 .then((data)=>this.displayWeather(data));
},

//Create data variables like name,description wind speed etc using the displayWeather function
displayWeather(data) {
const {name} = data;
const { icon,description} = data.weather[0];
const {temp,humidity} = data.main;
const {speed} = data.wind;
console.log(name,icon,description,temp,humidity,speed);

//Display the retreive data and print it in UI or render it on the screen
document.querySelector(".city").innerText = `Weather in ${name}`
document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`
document.querySelector(".temp").innerText = `${temp} °C`
document.querySelector(".description").innerText = `${description}`
document.querySelector(".humidity").innerText = `Humidity is ${humidity} %`
document.querySelector(".wind").innerText = `Wind Speed is ${speed} km/h`
document.querySelector(".weather").classList.remove("loading");

//Display each city images while we select 
document.body.style.backgroundImage =
      `url(https://source.unsplash.com/1600x900/?${name})`;
},

//Search data by using click function i.e event listener 
search()
 {
    this.fetchWeather(document.querySelector(".search-bar").value);

}
};
document.querySelector(".search button")
.addEventListener("click",function() 
{
weather.search();
});

// Not only by search bar but through the enter button also we should able to show the data as desired using "Keyup" event listener
document
.querySelector(".search-bar")
.addEventListener("keyup", (event) =>{
if (event.key == "Enter") {
weather.search();
    }
   });

   //Called the default city while loading to avoid error or nothing to display

weather.fetchWeather("nagercoil");