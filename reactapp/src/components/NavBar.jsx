import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <a href="/">Home</a>
      </li>
      <li className="nav-item dropdown">
        <a href="#" className="dropdown-toggle">Account</a>
        <ul className="dropdown-menu">
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
          
        </ul>
      </li>
      
    </ul>
    </nav>
  )

}


export default NavBar