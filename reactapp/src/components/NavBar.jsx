import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      
      <li className="nav-item dropdown">
        <a href="#" className="dropdown-toggle">Account</a>
        <ul className="dropdown-menu">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          
        </ul>
      </li>
      
    </ul>
    </nav>
  )

}


export default NavBar