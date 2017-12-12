import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddNewStudent from './AddNewStudent'
import { createNewStudent, updateExistingStudent, deleteExistingStudent, fetchStudents } from './../reducers/students'
import { createNewCampus } from '../reducers/campuses';


class StudentList extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="student-list">
        {this.props.students.map(student => {
          return (
            <div key={student.id}>
              <NavLink to={`/students/${student.id}`}>
                <h2 className="student-name">{student.firstName}</h2>
              </NavLink>
              <button
                className="student-delete-button"
                onClick={() => {
                  this.props.deleteStudent(student)
                }}>
                <span>X</span>
              </button>
            </div>
          )
        })}

        <AddNewStudent />
      </div>
    )
  }

}




const mapStateToProps = ({ students }) => ({ students })


function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadStudents: function () {
      dispatch(fetchStudents)
    },
    createStudents: function () {
      dispatch(createNewStudent)
    },
    updateStudents: function () {
      dispatch(updateExistingStudent)
    },
    deleteStudent: function (student) {
      dispatch(deleteExistingStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)


