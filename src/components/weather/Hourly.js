import React from 'react'

export default function Hourly(props) {
    console.log(props);
    return (
        <div>
            <h1>
                {`${props.time.getHours()}: 00`}
            </h1>
            <img src = {`http://openweathermap.org/img/wn/${props.icon}@2x.png`}>

            </img>
            <ul>
                <li className = "description">
                    {props.description}
                </li>
                <li className = "temp">
                    {props.temp}
                </li>
            </ul>
        </div>
    )
}
