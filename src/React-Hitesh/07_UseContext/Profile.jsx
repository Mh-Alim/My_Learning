import React, { useContext } from 'react'
import UserContext from './context'

const Profile = () => {
    const {user,setUser} = useContext(UserContext)
  return (
      <div>
          <h2>Profile</h2>
          <p>name : { user }</p>
    </div>
  )
}

export default Profile