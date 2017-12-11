import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'

import { deleteExistingStudent, updateExistingStudent } from './../reducers/students'
import UpdateStudent from './UpdateStudent'


const SingleStudent = ({ student, campuses }) => {
  if (!student) return null

  const [campus] = campuses.filter(campus => student.campusId === campus.id)
   return (
    <div>
       <h2>
         {`${student.firstName} ${student.lastName}`}</h2>

         <img className="student-photo" src={student.imageUrl} />
      {
        campus &&
        <div>
          <h3>
            {`${student.firstName} ${student.lastName}`} is a student of {campus.name}
          </h3>
          <NavLink to={`/campuses/${campus.id}`}>
             <h3>campus</h3>
          </NavLink>
        </div>
      }
      <h4> Student Email: </h4>
      <h5> {student.email} </h5>
      <UpdateStudent student={student} />
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    confirmDelete: (student) => {
      console.log('deleted ', student)
      dispatch(deleteExistingStudent(student, ownProps.history))
    }
  }
}

const mapStateToProps = ({ campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.studentId)
  return {
    student: _.find(students, student => student.id == paramId),
    campuses: campuses
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
