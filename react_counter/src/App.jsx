
import { useState } from 'react';
import './App.css'

function App() {

    let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () =>{

    // counter = counter + 1
  
    setCounter (counter + 1)  //First method to write counter updated value
      // console.log ("clicked", counter);

    }
  const removeValue = () =>{
  
  //second method to write counter updated value
    setCounter(counter-1)

    if(counter==0){
       setCounter (counter = 0)
    }

       // console.log ("clicked", counter); 
    }
  return (

    <>
    <center>
      <h1> Counter Project </h1>
      <h2> Counter Value: {counter} </h2>

      <button
      onClick = {addValue}
      > Add Value + </button>

      <br/>

      <button
      onClick = {removeValue}
      > Remove Value - </button>
      </center>
   </>
  )
  
}

export default App
