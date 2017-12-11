import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CampusList from './CampusList'
import StudentList from './StudentList'


const NavBar = () => {
  return (

    <nav>
    <div>
    <ul className="nav justify-content-end">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/campuses">Campuses</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/students">Students</Link></li>
          </ul>

        </div>
      </nav>

  )
}


export default NavBar;
