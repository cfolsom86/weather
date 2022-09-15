import './App.css';
import Search from './Components/Search/Search';
import CurrentWeather from './Components/Current/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Components/api.js'
import { useState } from 'react';
import Forecast from './Components/Forecast/Forecast';
import { VscGitPullRequestCreate } from 'react-icons/vsc'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)


  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json()
      const forecastResponse = await response[1].json()

      setCurrentWeather({city: searchData.label, ...weatherResponse})
      setForecast({city: searchData.label, ...forecastResponse})


    })

    .catch((err) => console.log(err))


  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <Forecast data={forecast} />}
      <VscGitPullRequestCreate />
    </div>
  );
}

export default App;
