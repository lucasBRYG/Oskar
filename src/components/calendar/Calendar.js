import React, { useState, useEffect } from 'react';

import "./Calendar.css";

export default function Calendar() {

    const [today, setToday] = useState(new Date()); //this date object holds curent date date

    // const [month, setMonth] = useState(today.toLocaleString('default', { month: 'short' })); //sets month state to short string

    // const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1)); //sets the state of first day of current month

    // const [lastDayOfMonth, setLastDayofMonth] = useState(new Date(today.getFullYear(), today.getMonth() + 1, 0)); // """" last day of month

    // const [firstDayOfCalendar, setFirstDayOfCalendar] = useState(new Date(today.getFullYear(), today.getMonth(), -firstDayOfMonth.getDay() + 1)); // """" first day of calendar

    // const [lastDayOfCalendar, setLastDayofCalendar] = useState(new Date(today.getFullYear(), today.getMonth() + 1, lastDayOfMonth.getDay())); // """"last day of calendar

    //let calendarDOMArray = []; // array that will hold the html elements

    // useEffect(() => {
    //     renderDays();
    // });

    function renderDays(today) { //this function will generate an array of html elements that will render a calendar
        let calendarDOMArray = [];
        for (let i = 0; i < new Date(today.getFullYear(), today.getMonth(), 1).getDay(); i ++) { // this loop iterates for each day in calendar before start of month
            let date = new Date(today.getFullYear(), today.getMonth(), -new Date(today.getFullYear(), today.getMonth(), 1).getDay() + 1).getDate() + i;
            calendarDOMArray.push(<li key = {calendarDOMArray.length} className = "preMonthDays day" data-year = {today.getMonth() !== 0 ? today.getFullYear() : today.getFullYear()-1} data-month = {today.getMonth() !== 0 ? today.getMonth()-1 : 11} data-date = {date} onClick = {handleDayClick}>{date}</li>); // add a div element to array
        }
        for (let i = 0; i < new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); i ++) { // this loop iterates for each day in month
            let date = new Date(today.getFullYear(), today.getMonth(), 1).getDate() + i;
            calendarDOMArray.push(<li key = {calendarDOMArray.length} className = {today.getDate() === date ? `today monthDays day` : `monthDays day`} data-year = {today.getFullYear()} data-month = {today.getMonth()} data-date = {date} onClick = {handleDayClick}>{date}</li>); // add a div element to array
        }
        for (let i = 6; i > new Date(today.getFullYear(), today.getMonth() + 1, 0).getDay(); i -- ) { // this loop iterates for each day in month
            let date = 7 - i;
            calendarDOMArray.push(<li key = {calendarDOMArray.length} className = "postMonthDays day" data-year = {today.getMonth() !== 11 ? today.getFullYear() : today.getFullYear() + 1} data-month = {today.getMonth() !== 11 ? today.getMonth()+1 : 0} data-date = {date} onClick = {handleDayClick}>{date}</li>) // add a div element to array
        }
        console.log(calendarDOMArray);
        console.log(today.getMonth());
        return calendarDOMArray;
    }

    function previousMonth() { // this function changes the state of calendar to previous calendar month
        setToday(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));
        // setMonth(today.toLocaleString('default', { month: 'short' }));
        // setFirstDayOfMonth(new Date(today.getFullYear(), today.getMonth(), 1));
        // setLastDayofMonth(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        // setFirstDayOfCalendar(new Date(today.getFullYear(), today.getMonth(), -firstDayOfMonth.getDay() + 1));
        // setLastDayofCalendar(new Date(today.getFullYear(), today.getMonth() + 1, lastDayOfMonth.getDay()));
    }

    function nextMonth() {
        setToday(new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()));
        // setMonth(today.toLocaleString('default', { month: 'short' }));
        // setFirstDayOfMonth(new Date(today.getFullYear(), today.getMonth(), 1));
        // setLastDayofMonth(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        // setFirstDayOfCalendar(new Date(today.getFullYear(), today.getMonth(), -firstDayOfMonth.getDay() + 1));
        // setLastDayofCalendar(new Date(today.getFullYear(), today.getMonth() + 1, lastDayOfMonth.getDay()));
    }

    function handleDayClick(event) {
        let date = event.target.getAttribute("data-date");
        let month = event.target.getAttribute("data-month");
        let year = event.target.getAttribute("data-year");

        setToday(new Date(year, month, date));
        event.target.setAttribute("className", `${event.target.getAttribute("className")} today`);

        console.log(date + " " + month + " " + year);

    }

    return (
        <div>
            <div className="calendar">
                <div className = "calendar-header">
                    <i className="fas fa-angle-left" onClick = {() => previousMonth()}></i> 
                    <h2 className = "month">{today.toLocaleString('default', { month: 'short' })}</h2>
                    <i className="fas fa-angle-right" onClick = {() => nextMonth()}></i>
                </div>
                <div className = "calendar-weekdays">
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>
                    <p>Wed</p>
                    <p>Thu</p>
                    <p>Fri</p>
                    <p>Sat</p>
                </div>
                <ul className = "calendar-days">
                    {renderDays(today)}
                </ul>
            </div>
        </div>
    )
}


    // console.log(month);
    // console.log(today.getFullYear());
    // console.log(today.getMonth());
    // console.log("****");
    // console.log(daysInMonth);

    // const daysToRender = from.getDay() + lastDayOfMonth.getDate() + lastDayOfMonth.getDay();     ***calculates days that will be displayed on the calendar(will either be 35 or 42 it everything is working***