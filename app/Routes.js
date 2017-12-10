import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import history from './history'
import Root from './components/Root'
import Home from './components/Home'
import Campuses from './components/CampusList'
import Students from './components/StudentList'
import SingleStudent from './components/SingleStudent'
import SingleCampus from './components/SingleCampus'
import { fetchStudents } from './reducers/students'
import { fetchCampuses } from './reducers/campuses'



class Routes extends Component {

  componentDidMount() {
    this.props.fetchData()

  }

  render() {
    return (
      <Router history={history}>
        <Root>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/campuses" component={Campuses} />
         <Route path="/campuses/:campusId" component={SingleCampus} />
          <Route exact path="/students" component={Students} />
          <Route path="/students/:studentId" component={SingleStudent}/>
          </Switch>
          </Root>
        </Router>
    )
  }

}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  fetchData: () => {
    dispatch(fetchCampuses())
    dispatch(fetchStudents())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
