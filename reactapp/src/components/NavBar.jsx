import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className = "NavBar">
        <Link to="/" style={{marginRight: '10px'}}>Home</Link>
        <Link to="/login">Login</Link>

    </div>

  )
}

export default NavBar