import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './Forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const Forecast = ({data}) => {
    const dayOfTheWeek = new Date().getDay()
    const forecastDays = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfTheWeek))
    return (
    <>
        <label className="title">Daily Forecast</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (

                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day">{forecastDays[idx]}</label> 
                                <label className="description"> {item.weather[0].description}</label>
                                <label className="min-max"> {Math.round(item.main.temp_min)}°F / {Math.round(item.main.temp_max)}°F</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-item">
                                <label><strong>Pressure: </strong></label>
                                <label>{item.main.pressure}hPa</label>
                            </div>

                            <div className="daily-details-grid-item">
                                <label><strong>Humidity: </strong></label>
                                <label>{item.main.humidity}%</label>
                            </div>

                            <div className="daily-details-grid-item">
                                <label><strong>Clouds: </strong></label>
                                <label>{item.clouds.all}%</label>
                            </div>

                            <div className="daily-details-grid-item">
                                <label><strong>Wind: </strong></label>
                                <label>{item.wind.speed}mph</label>
                            </div>

                            <div className="daily-details-grid-item">
                                <label><strong>Sea Level: </strong></label>
                                <label>{Math.round(item.main.sea_level)}ft</label>
                            </div>

                            <div className="daily-details-grid-item">
                                <label><strong>Feels like: </strong></label>
                                <label>{Math.round(item.main.feels_like)}°F</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
        <p><i><small>*All information shown here is from GeoDB and OpenWeather*</small></i></p>
    </>
    
    )
}

export default Forecast