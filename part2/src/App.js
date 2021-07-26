import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)
  const [ newFilterName, setNewFilterName ] = useState('')
  const handleAddName = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return false
    }
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber(0)
  }
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handleFilterNameChange = (e) => {
    setNewFilterName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter: <input onChange={handleFilterNameChange}/>
      </div>
      <h2>Add a new</h2>
      <form>
      </form>
      <form>
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleAddName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.toLowerCase().indexOf(newFilterName.toLowerCase()) > -1)
        .map((person, index) => <div key={`${person.name}_${index}`}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
