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

        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button> 
 
      <Statistics feedbackCounter={feedbackCounter} good = {good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>

    
  )
}

const Statistics = (props) => { 
  console.log(props)
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
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.total} </p>
    <p>average {props.average} </p>
    <p>positive {props.positive} %</p>
    </div>
    )
}

export default App
