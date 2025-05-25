import { useEffect,useState } from "react"
import CountryDetail from "./ContryDetails"

const CountriesList = ( {newCountries} ) => {
    const [selectedCountry, setSelectedCountry] = useState(null)
    useEffect(() => {
        if (newCountries.length === 0) {
            setSelectedCountry(null)
        }
    }, [newCountries])
    if(newCountries && newCountries.length > 10){
        return(
            <p>Too many matches specify another filter</p>
        )
    } else if(newCountries.length == 1){
        return(
            <CountryDetail country={newCountries[0]} />
        )
    } else {
        return(
            <>
            {newCountries.map((c,i) => <p key={i}>{c} <button onClick={() => setSelectedCountry(c)}>show</button></p>)}
            {selectedCountry && <CountryDetail country={selectedCountry} />}
            </>
        )
    }
}

export default CountriesList