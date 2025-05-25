import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import personsData from './services/personsData'
import Notifications from './components/Notifications'
import './assets/index.css'; 

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  
  useEffect(() => {
    personsData
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        console.error("Failed to fetch persons:", error.message);
     });
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const personId = Math.max(...persons.map(p => Number(p.id)))
    const addNewName = {
      name: newName,
      number: newNumber,
      id: String(personId + 1)
    }
    const personName = persons.find(p => p.name === addNewName.name)
    const numberCheck = persons.find(p => p.number === addNewName.number)
    if(personName){
      if(numberCheck){
        alert(`${newName} is already added to the phonebook`) 
      }else if(window.confirm(`${newName} is already added to the phonebook, replace the old number?`)){
        const UpdatePerson = {
          ...personName,
          number: newNumber
        }
        console.log(UpdatePerson)
        personsData
          .putNum(UpdatePerson)
          .then(response => {
            setPersons(persons.map(p => p.id !== response.data.id ? p : response.data))
            setSuccessMessage(
              `${response.data.name}'s details are updated successfully`
            )
            setTimeout(() => setSuccessMessage(null), 3000)
          })
          .catch(error => {
            setErrorMessage(
              `Note '${error}' was already removed from server`
            )
            setTimeout(() => setErrorMessage(null), 3000)
          })
      }
    }else{
      personsData
        .create(addNewName)
        .then(response => {
          setPersons(persons.concat(response.data))
          setSuccessMessage(
            `Added ${response.data.name}`
          )
          setTimeout(() => setSuccessMessage(null), 3000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id) => {
    if(window.confirm("Do you really want to delete this person's phone address")){
      personsData
        .deleteObj(id)
        .then(response => {
          console.log(response.data)
          setPersons(persons.filter(p => p.id !== response.data.id))
          setSuccessMessage(
            `Deleted ${response.data.name}`
          )
          setTimeout(() => setSuccessMessage(null), 3000)
        })
        .catch(error => {
          setErrorMessage(
            `Note '${error}' was already removed from server`
          )
         setTimeout(() => setErrorMessage(null), 3000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notifications message={errorMessage}  className="error"/>
      <Notifications message={successMessage} className="success"/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Add a new</h3>
      <PersonsForm addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} deletePerson={deletePerson}/>
    </div>
  )
}

export default App