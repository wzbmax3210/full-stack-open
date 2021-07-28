import React, { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Person from "./components/Person"
import axios from "axios"

const App = () => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)
  const [ newFilterName, setNewFilterName ] = useState('')
  const [ persons, setPersons ] = useState([])
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

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      setPersons(response.data)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterNameChange={handleFilterNameChange} />
      <h2>Add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleAddName={handleAddName} />
      <h2>Numbers</h2>
      <Person persons={persons} newFilterName={newFilterName} />
    </div>
  )
}

export default App
