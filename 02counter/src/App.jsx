import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15

  let [counter , setCounter] = useState(15)

  const addValue = ()=>{
    if(counter === 30) return
    counter = counter + 1;
    setCounter(counter)
    
    
  }

  const removeValue = ()=>{
    if(counter === 0) return
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
    <h1>chai or react</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>

    </>
  )
}

export default App
