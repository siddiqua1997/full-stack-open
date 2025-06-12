const Persons = ({ persons,filter,deletePerson }) => {
    return(
        persons
            .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
            .map((person,id) =>
            <p key={id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></p>
        )
    )
}

export default Persons