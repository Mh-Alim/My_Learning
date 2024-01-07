import React from 'react'
import "./Router.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between",background:"grey"}}>
          <NavLink to="/" className={({isActive}) => isActive ? "red" : ""  } >Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "red" : ""  } >About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "red" : ""  } >contact</NavLink>
    </div>
  )
}

export default Header