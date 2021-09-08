import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({title}) => {
  return (
    <nav className="navbar navbar-lg navbar-light bg-light p-3">
      <h3>{title}</h3>
      <ul>
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/about">About</Link>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'TicketMaster Events'
}

export default Navbar
