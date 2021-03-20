import React, {useEffect} from 'react'

export default function Weather() {

    const currentWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=baltimore,maryland}&appid=4395e19d6c9918410c93c56342e6c903";
    let currentWeatherObject = {
        city: "",
        temperature: 0,
        windSpeed: 0,
        uvi: 0,
        icon: ""
    };

    useEffect(() => {
        fetch(currentWeatherURL).then(res => res.json()).then(data => console.log(data));
    })
    //data.city = location data - object
    //data.cnt = number of individual forcasts in array(0-40) - int
    //data.list = list of individual forcasts - array
    //data.list[i].dt = unix timestamp - int
    //data.list[i].main = conditions - object
    //data.list[i].main.temp = current temp - int
    //data.list[i].main.feels_like = current 'feels like' temp - int
    //data.list[i].main.humidity = current humidity - int
    //data.list[i].main.pressure = current atmospheric pressure - int
    //data.list[i].main.temp_max = project max temp for day - int
    //data.list[i].main.temp_min = projected min temp for day - int
    //data.list[i].weather = weather forcast - array
    //data.list[i].weather[0] = weather forcast - object
    //data.list[i].weather[0].description = short description of weather - string
    //data.list[i].weather[0].icon = openweather icon code(eg. "01d") - string
    //data.list[i].weather[0].did = weather condition id - int
    //data.list[i].wind = wind info - object
    //data.list[i].wind.speed = wind speed - int
    //data.list[i].wind.deg = wind direction - int
    return (
        <div>
            Weather
        </div>
    )
}

// ALL OF THIS IS FOR THE CURRENT WEATHER API {
    // useEffect(() => {
    //     console.log(currentWeatherObject);
    //     fetch(currentWeatherURL).then((res) => {console.log(res.json())});
    //     // fetch(currentWeatherURL).then(res => {res.json()}).then(data => {console.log(data)}).catch(err => {console.log(err)});
    // })
    //console.log(currentWeatherObject);
    //fetch(currentWeatherURL)//.then(res => console.log(res.json()));

    //so here we need to move the relevant info from the weather object that's returned and the currentWeatherObject
    //data.weather[0] = current weather - object
    //data.weather[0].description = short description of weather - string
    //data.weather[0].icon = weather icon id(eg. "02d") - string
    //data.main = current conditions - object
    //data.main.temp = current temp - int
    //data.main.feels_like = current 'feels like' temp - int
    //data.main.humidity = current humidity - int
    //data.main.pressure = current atmospheric pressure - int
    //data.main.temp_max = project max temp for day - int
    //data.main.temp_min = projected min temp for day - int
    //data.wind = current wind data - object
    //data.wind.speed = wind speed - int
    //data.wind.deg = wind direction - int
//}