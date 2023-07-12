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
    <table>
      <tbody> 
        <tr>
          <td>
          <StatisticLine text="good"  />
          </td>
          <td>
          <StatisticLine value={props.good}/>
          </td>
        </tr>
        <tr>
          <td>
          <StatisticLine text="good"  />
          </td>
          <td>
          <StatisticLine value={props.good}/>
          </td>
        </tr>
        <tr>
          <td>
          <StatisticLine text="neutral"  />
          </td>
          <td>
          <StatisticLine value={props.neutral}/>
          </td>
        </tr>
        <tr>
          <td>
          <StatisticLine text="bad"  />
          </td>
          <td>
          <StatisticLine value={props.bad}/>
          </td>
        </tr>
        <tr>
          <td>
          <StatisticLine text="all"  />
          </td>
          <td>
          <StatisticLine value={props.total}/>
          </td>
        </tr>
        <tr>
          <td>
          <StatisticLine text="average"  />
          </td>
          <td>
          <StatisticLine value={props.average}/>
          </td>
        </tr>
        <tr>
          <td>
          <StatisticLine text="positive"  />
          </td>
          <td>
          <StatisticLine value={props.positive}/>
          </td>
          <td>%</td>
        </tr>

    </tbody>
      

    </table>
    </div>

    )
}

const StatisticLine = (props) => {
  return (<p>{props.text} {props.value}</p>)
}

export default App
