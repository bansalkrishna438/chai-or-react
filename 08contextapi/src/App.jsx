import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import { Login } from './component/login'
import Profile from './component/profile'

function App() {

  return (
    <UserContextProvider>
    <h1>React aur chai</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
