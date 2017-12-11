import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => (
  <div className="mainContainer">
    <NavLink to={'/campuses'}>
    <div className="campuseshome">Campuses</div>
    </NavLink>

    <NavLink to={'/students'}>
    <div className="studentshome">Students</div>
    </NavLink>
  </div>
)


export default Home
