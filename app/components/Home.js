import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => (
  <div>
    <NavLink to={'/campuses'}>
    <h2>campus logo here</h2>
    </NavLink>

    <NavLink to={'/students'}>
    <h2>student logo here</h2>
    </NavLink>
  </div>
)


export default Home
