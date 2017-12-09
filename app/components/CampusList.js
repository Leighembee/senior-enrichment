import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchCampuses } from './../reducers/campuses'





class CampusList extends Component {

  componentDidMount() {
    this.props.loadCampuses()
  }


  render() {
    if (this.props.campuses) {
      return (
        <div>
          <ul>

            {
              this.props.campuses.map(campus => (
                <li key={campus.id}>
                  <h2>{campus.name}</h2>
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
    campuses: storeState.campuses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCampuses(campus) {
      dispatch(fetchCampuses())
    }
  }
}

const CampusListContainer = connect(mapStateToprops, mapDispatchToProps)(CampusList)

export default CampusListContainer

