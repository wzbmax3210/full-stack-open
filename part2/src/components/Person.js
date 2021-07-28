import React from "react"

const Person = (props) => (
  <div>
    {props.persons.filter(person => person.name.toLowerCase().indexOf(props.newFilterName.toLowerCase()) > -1)
      .map((person, index) => <div key={`${person.name}_${index}`}>{person.name} {person.number}</div>)}
  </div>
)

export default Person
