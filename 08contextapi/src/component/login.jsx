import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

export function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useContext(UserContext)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input type="text" value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
            <input type="text" value={password} placeholder='password' onChange={(e) => setpassword(e.target.value)}/>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}
