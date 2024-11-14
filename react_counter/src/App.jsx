import './App.css'

function App() {

  let counter = 5

  const addValue = () =>{
    counter = counter + 1

  };

  const removeValue = () =>{
   counter = counter-1
  
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

export default App;
