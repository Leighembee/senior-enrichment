import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchStudents } from './../reducers/students'




class StudentList extends Component {

  componentDidMount() {
    this.props.loadStudents()
  }


  render() {
    if (this.props.students) {
      return (
        <div>
          <ul>
            {
              this.props.students.map(student => (
                <li key={student.id}>
                  <h2>{student.firstName}</h2>
                </li>
                 ))
            }



          </ul>
          </div>
      )
    }

  }


}



function mapStateToprops(storeState, ownProps) {
  return {
    students: storeState.students
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadStudents(student) {
      dispatch(fetchStudents())
    }
  }
}

const StudentListContainer = connect(mapStateToprops, mapDispatchToProps)(StudentList)

export default StudentListContainer

