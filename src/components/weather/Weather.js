import React, {useEffect, useState} from "react";

import Today from "./Today";
import Hourly from "./Hourly";

import Forecast from "./forecastClass"; // imports the forecast class. <new Forecast(icon, temp, description, time)> 
import { logDOM } from "@testing-library/dom";

export default function Weather() {

    const [weatherState, setWeatherState] = useState({
        city: "Baltimore, Maryland",
        date: new Date(),
        current: {},
        hourly: [],
        future: {

        }
    })

    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherState.city}&units=imperial&appid=4395e19d6c9918410c93c56342e6c903`;

    useEffect(() => {
        
        fetch(currentWeatherURL)
        .then(res => res.json())
        .then(data => {
            // console.log(data.list[0].dt)
            // console.log(data)
            // console.log(new Date(data.list[0].dt * 1000).getHours());

            let hourlyForcasts = [];
            for (let i = 1; new Date(data.list[i].dt * 1000).getHours() <= 24 ; i++){
                hourlyForcasts.push(new Forecast(data.list[i].weather[0].icon, data.list[i].main.temp, data.list[i].weather[0].description, new Date(data.list[i].dt * 1000)));
            }

            setWeatherState({...weatherState, current: new Forecast(data.list[0].weather[0].icon, data.list[0].main.temp, data.list[0].weather[0].description, new Date(data.list[0].dt * 1000))});
            setWeatherState({...weatherState, hourly: hourlyForcasts});
        })
        .catch(err => "ERROR #" + err.cod + ": " + err.message); // this will catch error messages from the openWeather API call
    }, [])
    //data.city = location data - object 
    //data.cnt = number of individual forcasts in array(0-40) - int
    //data.list = list of individual forcasts - array
    //data.list[i].dt = unix timestamp - int                           1616522400 - 10:36 EST/ 2:36 UTC     -14400 - timezone
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
            <Today icon = {weatherState.current.icon} temp = {weatherState.current.temp} description = {weatherState.current.description} date = {`${weatherState.date.getMonth() + 1}/${weatherState.date.getDate()}`}/>
            {weatherState.hourly.map(hour => {
                return <Hourly icon = {hour.icon} temp = {hour.temp} decription = {hour.description} time = {hour.time}/>
            })}
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