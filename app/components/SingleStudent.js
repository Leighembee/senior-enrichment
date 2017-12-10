import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import UpdateStudent from './UpdateStudent'
//lodash to use _.find method
// import _ from 'loadash'
import _ from 'lodash'

const SingleStudent = ({ student, campuses }) => {

  if (!student) return null

  const [campus] = campuses.filter(campus => student.campusId === campus.id)
  return (
    <div>
      <h2>{`${student.firstName} ${student.lastName}`}</h2>
      {/* add student  image */}

      {
        campus &&
        <div>
          <h3>
            {`${student.firstName} ${student.lastName}`} is a student of {campus.name}
          </h3>
          <NavLink to={`/campuses/${campus.id}`}>
            <h3>addcampuslogo</h3>
          </NavLink>
        </div>
      }
      <h4> Student Email: </h4>
      <h5> {student.email} </h5>
      <UpdateStudent student={student} />

    </div>
  )
}

const mapDispatchToProps = null

const mapStateToProps = ({ campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.studentId)
  return {
    student: _.find(students, student => student.id == paramId),
    campuses: campuses
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
