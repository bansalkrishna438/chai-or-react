import { useState } from 'react'
import { Card } from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>TailwindTest</h1>
     <Card username = "krishna" btnText='Click ME'/>
     <Card username = "saurav" btnText='HELLO'/>
     <Card/>
    </>
  )
}

export default App
