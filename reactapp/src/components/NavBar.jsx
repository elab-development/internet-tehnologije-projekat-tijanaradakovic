import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className = "NavBar">
        <Link to="/" style={{marginRight: '10px'}}>Pocetna</Link>
        <Link to="/login">Prijava</Link>

    </div>

  )
}

export default NavBar