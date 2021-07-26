import React, {useState} from 'react'

const Header = ({title}) => (
  <h2>{title}</h2>
)

const Part = ({name, exercises}) => (
  <div>
    {name} {exercises}
  </div>
)

const Content = ({parts}) => (
  <div>
    {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises}/>
    )}
  </div>
)

const Total = ({parts}) => (
  <h3>total of {parts.reduce((total, part) => total + part.exercises, 0)} exercises</h3>
)

const Course = ({courses}) => (
  <div>
    <h1>Web development curriculum</h1>
    {courses.map(course => (
      <div>
        <Header title={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    ))}
  </div>
)

export default Course
