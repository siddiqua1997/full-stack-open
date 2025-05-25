import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = () => {
    return axios.get(`${baseUrl}/all`)
}

const getCountryDetails = (countryName) => {
    return axios.get(`${baseUrl}/name/${countryName}`)
}

const getCountryWeather = (country,apiKey) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`;
    return axios.get(url)
}

export default { getAll,getCountryDetails,getCountryWeather }