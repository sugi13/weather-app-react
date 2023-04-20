import '../App.css';
import MaxTempImg from '../assets/icons8-thermometer-up-50 (1).png';
import MinTempImg from '../assets/icons8-thermometer-down-50.png';
import WindImg from '../assets/icons8-windsock-50.png';
import DegImg from '../assets/icons8-barometer-50.png';
import GaugeImg from '../assets/icons8-rain-gauge-50.png';

export const WeatherCardCity = ({cityDetails}) =>{
    return (
        <div className="city-content">
            <div className="city-content-header">
                <p>Weather Forecast</p>
                <h1>{cityDetails.weather[0].description}</h1>
                <span><ion-icon name="location"></ion-icon>{cityDetails.name}</span>
                <span id = 'temp'>{cityDetails.main.temp} &deg;C</span>
            </div>
            <div className="city-forecast-box">
                <div className="box-1">
                <img src ={MaxTempImg}/>
                    <p className='temp'>{cityDetails.main.temp} &deg;C</p>
                    <span>Maximum</span>
                </div>
                <div className="box-2">
                <img src= {MinTempImg}/>
                    <p className='temp'>{cityDetails.main.temp_min}&deg;C</p>
                    <span>Minimum</span>
                </div>
                <div className="box-3">
                <img src= {WindImg}/>
                    <p className='temp'>{cityDetails.wind.speed}km/h</p>
                    <span>Wind</span>
                </div>
                <div className="box-4">
                <img src= {DegImg}/>
                    <p className='temp'>{cityDetails.wind.deg}&deg;C</p>
                    <span>Degree</span>
                </div>
                <div className="box-5">
                <img src= {GaugeImg} alt="" />
                    <p className='temp'>{cityDetails.wind.gust}</p>
                    <span>Gust</span>
                </div>
            </div>
        </div>
    )
}