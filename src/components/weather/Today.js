import React from 'react'

export default function Today(props) {
    console.log(props)
    return (
        
        <div>
            <h1>
                {props.date}
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
