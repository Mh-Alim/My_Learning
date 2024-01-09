import React, { useState } from 'react'
import UserContext from './context'


// wrap <App /> component using ContextProvider
// since every component will be child of <App /> component
const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
  return (
      <UserContext.Provider value={{user,setUser}}>
          {children}
    </UserContext.Provider>
  )
}

export default ContextProvider