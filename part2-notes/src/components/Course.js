const Course = (props) =>{
    return (
      <div>
        <Header course={props.course}/>
        <Content parts={props.course.parts}/>
        <Exercises parts={props.course.parts} />
      </div>
    );
  
}

const Header = (props) => {
    return(
      <div>
        <h1>{props.course.name}</h1>
      </div>
    );
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map(part =>
            <Part key={part.id} part={part} />
        )} 
      </div>
    )
  
  }

  
const Part = ({part}) =>{
    return (  
      <div> 
          <p>{part.name} {part.exercises} </p>
      </div>
    ); 
      
    
}

  //This component calculates and returns the total of exercises for each course
const Exercises = ({parts}) => {

    const result = parts.map(part => part.exercises);
    var countEx = result.reduce((a,b) => a+b, 0);
  
    return(
      <div><b>total of {countEx} Exercises</b></div>
      );
   }

export default Course;