import { CurrentWeather } from './components/CurrentWeather';
import { WeatherByCity } from './components/WeatherByCity';
import './App.css';

function App() {

  return (
    <div className="App">
    <CurrentWeather/>
    <WeatherByCity />
    </div>
  )
}

export default App
