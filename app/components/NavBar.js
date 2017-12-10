import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CampusList from './CampusList'
import StudentList from './StudentList'


const NavBar = () => {
  return (

    <nav className="navbar">
      <div className="navbar-child">
        <ul>
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/campuses">Campuses</Link></li>
        <li><Link className="navbar-link" to="/students">Students</Link></li>
          </ul>

        </div>
      </nav>

  )
}


export default NavBar;
