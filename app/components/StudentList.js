import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddNewStudent from './AddNewStudent'
import { fetchStudents, createNewStudent,updateExistingStudent, deleteExistingStudent } from './../reducers/students'



class StudentList extends Component {

  componentDidMount() {
   this.props.loadStudents()
  }


  render() {
    if (this.props.students) {
      return (
        <div>

          {
            this.props.students.map(student => {
              return(
                <div key={student.id}>
                  <h2 className="student-name">{student.firstName}</h2>
                  <NavLink to={`/students/${student.id}`}>
                    <img className="student-photo" src={student.imageUrl} />
                  </NavLink>
                  <button
                    className="delete-button"
                    onClick={ () => deleteExistingStudent(student)}>
                    <span>X</span>
                    </button>
              </div>
            )})
            }

          {/* <AddNewStudent /> */}
          </div>
      )
    }

  }

}


const mapStateToProps = (storeState, ownProps) => {
  return {
    students: storeState.students
  }
}

// const mapDispatchToProps = { createNewStudent, updateExistingStudent, deleteExistingStudent }

function mapDispatchToProps(dispatch) {
  return {
    loadStudents(student) {
      dispatch(fetchStudents())
    }
  }
}


const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList)

export default StudentListContainer
