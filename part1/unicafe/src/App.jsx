import { useState } from 'react'
const Header = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
const StatisticsLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
  )
}
const Statistics = (props) => {
  if(props.total===0){
    return (
      <div>
        <h2>No Feedback given</h2>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text='good' value={props.good}/>
          <StatisticsLine text='neutral' value={props.neutral}/>
          <StatisticsLine text='bad' value={props.bad}/>
          <StatisticsLine text='all' value={props.total}/>
          <StatisticsLine text='average' value={props.average}/>
          <StatisticsLine text='positive' value={props.positive}/>
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [sum, setSum] = useState(0)
  const handleGood = () => {
    const newGood = good+1
    setGood(newGood)
    const newTotal = newGood + bad + neutral
    setTotal(newTotal)
    const newSum = sum+1
    setSum(newSum)
    setAverage(newSum/newTotal)
  }
  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newTotal = newNeutral + good + bad
    setTotal(newTotal)
    setAverage(sum/newTotal)
  }
  const handleBad = () => {
    const newBad = bad+1
    setBad(newBad)
    const newTotal = newBad + neutral + good
    setTotal(newTotal)
    const newSum = sum-1;
    setSum(newSum)
    setAverage(newSum/newTotal)
  }
  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={good/total*100}/>
    </div>
  )
}

export default App