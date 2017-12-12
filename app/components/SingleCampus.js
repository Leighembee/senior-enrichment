import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'

import { deleteExistingCampus, updateExistingCampus } from './../reducers/campuses'
import UpdateCampus from './UpdateCampus'
import AddNewStudent from './AddNewStudent'


const SingleCampus = ({ campus, students }) => {
  if (!campus) return null

  return (
    <div>
      <h2> {campus.name} </h2>
      <img className="single-campus-photo" src={campus.imageUrl} />
      <h3 className="students-on-campus">student list</h3>
      {students.map(student => {
        return (
          <div key={student.id}>
            <img className="student-photo" src={student.imageUrl} />
            <NavLink to={`/students/${student.id}`}>
              {`${student.firstName} ${student.lastName}`}
              </NavLink>
            </div>
        )
      })}

      <UpdateCampus campus={campus} />

     </div>
   )
}



const mapStateToProps = ({campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.campusId)
  return {
    campus: _.find(campuses, campus => campus.id === paramId),
    students: students.filter(student => student.campusId === paramId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    confirmDelete: (campus) => {
      console.log('deleted ', campus)
      dispatch(deleteExistingCampus(campus, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
