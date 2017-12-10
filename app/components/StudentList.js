import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddNewStudent from './AddNewStudent'
import { createNewStudent,updateExistingStudent, deleteExistingStudent, fetchStudents } from './../reducers/students'
import { createNewCampus } from '../reducers/campuses';


//try making this a pure function instead of a class to fix delete problem

class StudentList extends Component {
  constructor(props) {
    super(props)
    //const { deleteExistingStudent } = this.props
  }

  render() {
    return(
    <div>
      {this.props.students.map(student => {
        return (
          <div key={student.id}>
            <h2 className="student-name">{student.firstName}</h2>
            <NavLink to={`/students/${student.id}`}>
              <img className="student-photo" src={student.imageUrl} />
            </NavLink>
            <button
              className="delete-button"
              onClick={() => {
                console.log('deleting',student)
              this.props.deleteStudents(student)
              }}>
              <span>X</span>
            </button>
          </div>
        )
      })
      }

      <AddNewStudent />
    </div>
    )
    }

  }




const mapStateToProps = ({ students }) => ({students})


// const mapDispatchToProps = { createNewStudent, updateExistingStudent, deleteExistingStudent }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchStudents: function () {
      dispatch(fetchStudents)
    },
    createStudents: function () {
      dispatch(createNewCampus)
    },
    updateStudents: function() {
      dispatch(AddNewStudent)
    },
    deleteStudents: function (student) {
      dispatch(deleteExistingStudent(student))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList)


