import { useEffect,useState } from "react"
import countriesData from "../services/countriesData"
import Weather from "./Weather"

const CountryDetail = ({ country }) => {
    const [countryData, setCountryData] = useState(null)
    useEffect(() => {
        if(!country){
            setCountryData(null)
            return
        }
        countriesData
            .getCountryDetails(country)
            .then(response => {
                setCountryData(response.data)
            })
            .catch(error => {
                setCountryData(null)
            });
    },[country])
        return(
            <>
                {countryData &&
                <div className="country-details">
                    <h1>{country}</h1>
                    <div className="country-capital">
                        <p>Country {countryData.capital?.join(', ')}</p>
                        <p>Area {countryData.area}</p>
                    </div>
                    <div className="language-details">
                        <h1>Languages</h1>
                        <ul>{Object.values(countryData.languages).map((l,i) => <li key={i}>{l}</li>)}</ul>
                    </div>
                    <div className="country-flag">
                        <img src={countryData.flags.png} alt="Country flag"/>
                    </div>
                    <Weather country={country} />
                </div>
                }
            </>
        )
}

export default CountryDetail