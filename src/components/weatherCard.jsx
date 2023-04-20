export const WeatherCard = ({weatherData}) =>{
    return(
        <div className="current-weather">
           <div className="weather-card">
           <p><ion-icon name="location"></ion-icon>{weatherData.name}</p>
           <p id = 'description'>{weatherData.weather[0].description}</p>
            <p>{weatherData.main.temp} &deg;C</p>
           </div>
           <div className="weather-description">
           <h3>Daily Summary</h3>
           <span> Today it feels like {weatherData.main.feels_like}&deg;C but actually {weatherData.main.temp} &deg;C ,<br />
           the temperature is felt in the range from {weatherData.main.temp_min}&deg;C to {weatherData.main.temp_max}&deg;C.</span>
           </div>
        </div>
    )
}