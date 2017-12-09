import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CampusList from './CampusList'
import StudentList from './StudentList'


const NavBar = () => {
  return (
   <Router>
    <nav className="navbar">
      <div className="navbar-child">
        <ul>
        <li><Link className="navbar-link" to="/">Home</Link></li>
        <li><Link className="navbar-link" to="/campuses">Campuses</Link></li>
        <li><Link className="navbar-link" to="/students">Students</Link></li>
          </ul>


          <Route path='/campuses' component={CampusList} />
          <Route path='/students' component={StudentList}/>
        </div>
      </nav>
        </Router>
  )
}


export default NavBar;
