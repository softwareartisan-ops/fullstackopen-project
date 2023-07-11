import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const Statistics = () => {
    //Calculate the statistics
    let total = good + neutral + bad
    let average = (good * 1 + neutral * 0 + bad * (-1)) / total
    let posPercentage = good * 100 / total
    return <div> 
            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all  {total} </p>
            <p>average {average} </p>
            <p>SWpositive {posPercentage} %</p>
            </div>
  }


  return (
    <div>
      <h1>give feedback</h1>

        <button onClick={ () => setGood(good +1)}>good</button>
        <button onClick={ () => setNeutral(neutral +1)}>neutral</button>
        <button onClick={ () => setBad(bad +1)}>bad</button> 
      <Statistics />
      
    </div>
  )
}

export default App
