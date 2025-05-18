import { useState } from 'react'

const Button = ({ onClick,text }) => {
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({ feedback, total, average, positivePercentage }) => {
  if(total === 0 && average === 0 && positivePercentage === 0){
    return(
      <>
      <h1>Statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
          <StatisticLine text="good" value={feedback.good}/>
          <StatisticLine text="neutral" value={feedback.neutral}/>
          <StatisticLine text="bad" value={feedback.bad}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positivePercentage}/>
      </tbody>
    </table>
    </>
  )
}

const StatisticLine = ({value, text}) => {
  return(
    <tr>
        <td>{text}</td> 
        <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [feedback, setFeedback] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const total = feedback.good + feedback.neutral + feedback.bad
  const average = total === 0 ? 0 : (feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1) / total
  const positivePercentage = total === 0 ? 0 : (feedback.good / total) * 100

const giveFeedback = (type) => () => {
    setFeedback(prev => ({
    ...prev, 
    [type]: prev[type] + 1}))
}

  return (
    <div>
      <h1>give feedback here</h1>
      <Button onClick={giveFeedback("good")} text="good"/> 
      <Button onClick={giveFeedback("neutral")} text="neutral"/> 
      <Button onClick={giveFeedback("bad")} text="bad"/>
      <Statistics feedback={feedback} total={total} average={average} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App