import React, { Component } from 'react'
import axios from 'axios'
import {Router, Route, Switch} from 'react-router-dom'

import StudentList from './StudentList'


class Root extends Component {
  render() {
    return (
      <div>
   <StudentList/>
      </div>
    )
  }
}

export default Root
