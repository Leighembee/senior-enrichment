import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CampusList from './CampusList'
import StudentList from './StudentList'


const NavBar = () => {
  return (

    <div className="main-nav">
    <ul className="nav-ul">
        <li><Link className="nav-link" to="/">home</Link></li>
        <li><Link className="nav-link" to="/campuses">campuses</Link></li>
        <li><Link className="nav-link" to="/students">students</Link></li>
          </ul>
      </div>

  )
}


export default NavBar;
