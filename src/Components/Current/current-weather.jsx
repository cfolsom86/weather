import './current-weather.css'


const CurrentWeather = ({data}) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>Currently in {data.city}: </p>
                    {/*<p className='description'>{data.weather[0].description}</p>*/}
                </div>
                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}/>
            </div>     
            
            <div className='bottom'>
                <p className='temperature'>{Math.round(data.main.temp)}°F</p>
                <div className='details'>
                    <div className='parameter-row'>
                        
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like:</span>
                        <span className='paramter-value'>{Math.round(data.main.feels_like)}℉</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind Speed:</span>
                        <span className='paramter-value'>{Math.round(data.wind.speed)}mph</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity:</span>
                        <span className='paramter-value'>{Math.round(data.main.humidity)}%</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure:</span>
                        <span className='paramter-value'>{Math.round(data.main.pressure)}hPa</span>
                    </div>
                </div>
                <div classname="map">
                    
                </div>
            </div>         
        </div>
    )
}

export default CurrentWeather