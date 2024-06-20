const apiKey = "27326f96584703f4d89f5da4037a50a7"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let city = document.querySelector("#city")
let title = document.querySelector(".title")
let temp = document.querySelector("#temp")
let temp_condition = document.querySelector("#temp-condition")
let humidity = document.querySelector(".humidity")
let wind_speed = document.querySelector(".wind_speed")
let search_input = document.querySelector(".search input")
let search_btn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather-icon")


let checkWeather = async (city_name)=>{
    
    const fetchedData = await fetch(apiUrl + city_name + `&appid=${apiKey}`)
    let weather_data = await fetchedData.json()
    
    city.innerHTML = weather_data.name
    temp.innerHTML = Math.round(weather_data.main.temp) + "°C"

    humidity.innerHTML = weather_data.main.humidity + "%"
    wind_speed.innerHTML = weather_data.wind.speed + " km/h"

    weather_condition = weather_data.weather[0].main

    weatherIcon.src = `images/${weather_condition.toLowerCase()}.png`
    
    setTimeout(()=>{
       document.body.style.backgroundImage = `url(images/bg-${weather_condition.toLowerCase()}.png)`
    },300)

    temp_condition.innerHTML = weather_condition
    weather_condition.toLowerCase() == "drizzle" || weather_condition.toLowerCase() == "smoke"? title.style.color = "black" : title.style.color = "white"
    
}

search_btn.addEventListener("click", ()=>{
checkWeather(search_input.value)
})