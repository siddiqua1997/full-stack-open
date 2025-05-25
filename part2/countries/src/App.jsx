import { useState, useEffect } from 'react'
import countriesData from './services/countriesData'
import CountriesList from './components/CountriesList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [newCountries, setNewCountries] = useState([])
  
  useEffect(() => {
    countriesData
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.error("Failed to fetch persons:", error.message);
     });
  }, [])

  const findCountries = (e) => {
    e.preventDefault()
    const value = e.target.value
    setFilter(value)
    const newCountriesArr = value ? countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase())).map(p => p.name.common) : []
    setNewCountries(newCountriesArr)
  }

  return (
    <div>
      <h2>find countries</h2> <input value={filter} onChange={(e) => findCountries(e)} />
      <CountriesList newCountries={newCountries}/>
    </div>
  )
}

export default App