import React from "react"

const Filter = (props) => (
  <div>
    filter: <input onChange={props.handleFilterNameChange}/>
  </div>
)

export default Filter
