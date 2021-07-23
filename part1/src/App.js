import React, {useState} from 'react'

const Title = ({title}) => (
  <h1>
    {title}
  </h1>
)
const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = ({text, value}) => (
  <div>
    <td width='100'>{text}</td> <td>{value}</td>
  </div>
)
const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100 + '%'
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title='give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Title title='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
