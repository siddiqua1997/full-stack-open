const PersonsForm = ({ addName, newName, newNumber, setNewName, setNewNumber}) => {
    return(
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonsForm