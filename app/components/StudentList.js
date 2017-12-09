import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { fetchStudents } from './../reducers/students'



// const StudentList = () => {
//   const { students } = this.props

//   return (
//     <div>
//       {students.map(student => {
//         return (
//           <div key={student.id}>{student.name}</div>
//         )
//       })}
//       </div>
//   )

// }


class StudentList extends Component {

  componentDidMount() {
    this.props.loadStudents()
  }


  render() {
    if (this.props.students) {
      return (
        <div>
          <h3 id='students-name'>Students </h3>
          <ul>
            {
              this.props.students.map(student => (
                <li key={student.id}>
                  <span>{student.name}</span>
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

