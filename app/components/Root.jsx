import React, { Component } from 'react'
import axios from 'axios'


// import StudentList from './StudentList'
// import CampusList from './CampusList'

import NavBar from './NavBar'


class Root extends Component {
  render() {
    return (
      <div>
        {/* <CampusList/> */}
        <NavBar />

      </div>
    )
  }
}




// const Root = ({children}) => (
//   <div className="container-fluid">
//   <Navbar />
//   { children }
// </div>
// )

export default Root;
