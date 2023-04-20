import '../App.css';
import { useState, useEffect } from 'react';
import { WeatherCardCity } from './WeatherCard2';

export const WeatherByCity = () =>{

    let key = '27b8c009a8e0bc0d024ffa01116fa59d';

    const [CityName, setCityName] = useState('');
    let [cityData, setCityData] = useState('');

    useEffect(() =>{
        getCityData();
    }, []);      
    
    function getCityData(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${key}&units=metric`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            setCityData(data);
        });
    }


    return(
        <div className="container-2">
            <div className="container-2-header">
                <input type="text" placeholder =  'search by city' onChange={(e) =>{setCityName(e.target.value)}}/>
                <button onClick={()=> getCityData()}>Search</button>
            </div>
            <div className="city-forecast-detail">
            {(typeof cityData.main == 'undefined') ? (<div></div>) : (<WeatherCardCity cityDetails = {cityData}/>)}
            </div>
        </div>
    )
}