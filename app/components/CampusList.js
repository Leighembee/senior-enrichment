import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddNewCampus from './AddNewCampus'
import AddNewStudent from './AddNewStudent'
import { createNewCampus, updateExistingCampus, deleteExistingCampus, fetchCampuses} from './../reducers/campuses'


class CampusList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.campuses) {
      return (
        <div className ="class-form-container">
          {this.props.campuses.map(campus => {
            return (

              <div className="campus-list-container" key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                 {campus.name}
                </NavLink>
                <button className="campus-delete-button" onClick={() => {
                  this.props.deleteCampus(campus)
                }}>
               <span className="delete-button">X</span>
                  </button>
                </div>

            )
          })}
          <span>
            <AddNewCampus />
          </span>
          <AddNewStudent />
          </div>
      )
    }

  }


}




const mapStateToProps = ({ campuses }) => ({ campuses })


function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadCampuses: function () {
      dispatch(fetchCampuses)
    },
    createCampus: function () {
      dispatch(createNewCampus)
    },
    updateCampus: function () {
      dispatch(updateExistingCampus)
    },
    deleteCampus: function (campus) {
      dispatch(deleteExistingCampus(campus))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusList)
