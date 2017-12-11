import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AddNewCampus from './AddNewCampus'
import { createNewCampus, updateExistingCampus, deleteExistingCampus, fetchCampuses} from './../reducers/campuses'


class CampusList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.campuses) {
      return (
        <div>
          {this.props.campuses.map(campus => {
            return (
              <div key={campus.id}>
                <NavLink to={`/campuses/${campus.id}`}>
                 {campus.name}
                </NavLink>
                <button className="campus-delete-buttom" onClick={() => {
                  this.props.deleteCampus(campus)
                }}>
               <span>X</span>
               </button>
                </div>
            )
          })}

          <AddNewCampus />
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
