import '../App.css';
import { useState, useEffect } from 'react';
import { WeatherCard } from './weatherCard';

let key = '27b8c009a8e0bc0d024ffa01116fa59d';

export const CurrentWeather = () =>{
    // setting current date and month //
    let date = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let [CurrentMonth, setCurrentMonth] = useState(month);

    // API //
    const [Lat, setLat] = useState('');
    const [Long, setLong] = useState('');

    let [data, setData] = useState('');

    useEffect( () =>{
        navigator.geolocation.getCurrentPosition(position =>{
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        })
        generateCurrentWeather();
    }, [Lat, Long]);

   async function generateCurrentWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${key}&units=metric`)
        .then((response)=> response.json())
        .then((json) => {
            setData(json);
            console.log(json);
        });
    }

    return (
        <div className="container-1">
        <div className="header-content">
            <div className="date">
            <p>{date.getDate()} {CurrentMonth[date.getMonth()]} {date.getFullYear()}</p>
            </div>
           <div className="weather">
           {(typeof data.main == 'undefined') ? (<div></div>) : (<WeatherCard weatherData = {data}/>)}
           </div>
        </div>
        </div>
    )
}