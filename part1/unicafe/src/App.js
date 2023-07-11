import { useState } from 'react'




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [feedbackCounter, setAll] = useState(0)
  const total = good + neutral + bad
  const average = (good * 1 + neutral * 0 + bad * (-1)) / total
  const positive = good * 100 / total

//Handler functions that increment the count when clicking button
  const handleGood = () => {
    setGood (good + 1)
    setAll (feedbackCounter + 1)
  }
  const handleNeutral = () =>{ 
    setNeutral(neutral + 1) 
    setAll (feedbackCounter + 1)
  }
  
  const handleBad = () =>{
    setBad(bad + 1)
    setAll (feedbackCounter + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>

        <Button handleClick={handleGood} text='good' />
        <Button handleClick={handleNeutral} text = 'neutral' />
        <Button handleClick={handleBad} text = 'bad'/> 
 
      <Statistics feedbackCounter={feedbackCounter} good = {good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>

    
  )
}


const Button = ({ handleClick, text }) => 
(  <button onClick={handleClick}>    
          {text}  
    </button>
)


const Statistics = (props) => { 
  if (props.feedbackCounter === 0) 
  {    
    return (
      <div>
      No Feedback given
      </div>)
  }  
  return (
   <div> 
    <h1>statistics</h1>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.all} />
    <StatisticLine text="average" value={props.average} />
    <StatisticLine text="positive(%)" value={props.positive} />
    </div>

    )
}

const StatisticLine = (props) => {
  return (<p>{props.text} {props.value}</p>)
}

export default App
