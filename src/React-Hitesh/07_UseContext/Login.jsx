import React,{useContext, useState} from 'react'
import UserContext from './context'

const Login = () => { 
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser } = useContext(UserContext)
    
    const handleClick = (e) => {
        e.preventDefault();
        setUser(username);
        console.log(username, password);
        console.log(user);

    }
  return (
      <div>
          <h2>Login</h2>
          <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}   />
          <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default Login