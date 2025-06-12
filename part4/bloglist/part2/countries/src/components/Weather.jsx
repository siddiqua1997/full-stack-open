import { useEffect, useState } from "react"
import countriesData from "../services/countriesData"

const Weather = ({ country }) => {
    const [weatherDetails, setWeatherDetails] = useState(null)

    const api_key = import.meta.env.VITE_SOME_KEY
    useEffect(() => {
        if(!country){
            setWeatherDetails(null)
            return
        }
        countriesData
            .getCountryWeather(country,api_key)
            .then(response => {
                setWeatherDetails(response.data)
            })
            .catch(() => setWeatherDetails(null))
    },[country])
    const iconUrl = weatherDetails ? `https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png` : null
    return(
        <>
        {weatherDetails &&
            <div>
                <h1>Weather in {country}</h1>
                <p>Temperature {weatherDetails.main.temp} Celsius</p>
                <img src={iconUrl} alt="weather icon"/>
                <p>Wind {weatherDetails.wind.speed} m/s</p>
            </div>
        }
        </>
    )
}

export default Weather