import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import UpdateStudent from './UpdateStudent'
//lodash to use _.find method
import _ from 'loadash'

const SingleStudent = ({ student, campuses }) => {

  if (!student) return null

  const [campus] = campus.filter(campus => student.campusId === campus.id)
  return (
    <div>
      <h2>{student.name}</h2>
      {/* add student image */}

      {
        campus &&
        <div>
          <h3>
            {student.name} is a student of {campus.name}
          </h3>
          <NavLink to={`/campuses/${campus.id}`}>
            <img src={campus.image} />
          </NavLink>
        </div>
      }
      <h4> Student Email: </h4>
      <h5> {student.email} </h5>
      <EditStudent student={student} />

    </div>
  )
}

const mapStateToProps = ({ campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.studentId)
  return {
    student: _.find(students, student => student.id == paramdId),
    campuses: campuses
  }
 }

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
