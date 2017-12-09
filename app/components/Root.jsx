import React, { Component } from 'react'
import axios from 'axios'
import {Router, Route, Switch} from 'react-router-dom'

import StudentList from './StudentList'
import CampusList from './CampusList'


class Root extends Component {
  render() {
    return (
      <div>
        <CampusList/>
        <StudentList />
      </div>
    )
  }
}

export default Root
