import React from "react"

const PersonForm = (props) => (
  <form>
    <div>
      name: <input onChange={props.handleNameChange}/>
    </div>
    <div>
      number: <input onChange={props.handleNumberChange}/>
    </div>
    <div>
      <button type="submit" onClick={props.handleAddName}>add</button>
    </div>
  </form>
)

export default PersonForm
