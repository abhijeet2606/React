import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter ] = useState(0)
  
  
  const addValue = ()=>{
    if(counter < 20){
    setCounter(counter + 1)
    console.log("clicked", counter);
    }
  }

  const removeValue = ()=>{
    if(counter > 0){
    setCounter(counter - 1)
    console.log("clicked", counter);
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value :{counter}</h2>
      <button
      onClick={addValue}>Add value : counter</button>
      <br />
      <button
      onClick={removeValue}>Remove value </button>

    </>
  )
}

export default App
