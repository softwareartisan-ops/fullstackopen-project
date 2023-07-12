import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [countVote, setCountVote] = useState(0);
  const len = anecdotes.length;
  const aVotes = new Uint8Array(len);
  //const copyVotes = [...aVotes];
  const [copyVotes, setVotes] = useState(aVotes)



  //select a random index from the array of anecdotes
  const handleNextAnecdote = () =>{
    const randomIndex = getRandomInt(0,len);
    //reset counter of votes when the next anecdote button is clicked
    setCountVote(0);
    //Select the  randomly generated index
    setSelected(randomIndex);
  }

  //select a random anecdote from the array of anecdotes
  const handleVoting = () =>{
    const updatedCount = countVote + 1;
    copyVotes[selected] = updatedCount;

    //Set the vote into the  array of votes
    setVotes(copyVotes);

     //Print array of votes
    for(let i = 0 ; i < copyVotes.length ; i++){   
      console.log ('v[',i, ']=' , copyVotes[i]);
    }
    //Update the counter of votes
    setCountVote(updatedCount);
    
  }

  return (
    <>
    <div>
      {anecdotes[selected]}
      <p>has {countVote} votes</p>
    </div>
    <Button handleClick={handleVoting} text='vote' />
    <Button handleClick={handleNextAnecdote} text='next anecdote' />
    </>
  );
};

const Button = (props) => 
{  
  return(
    <button onClick={props.handleClick}>    
          {props.text}  
    </button>
  )

};
//Generates a random number between two numbers
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}



export default App;