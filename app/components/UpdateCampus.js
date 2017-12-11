import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExistingCampus } from './../reducers/campuses'

class UpdateCampus extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.campus

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit
   }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }
  handleImageChange(event) {
    this.setState({imageUrl: event.target.value})
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const { id, name, imageUrl, description } = this.state
    const campusUpdate = { id, name, imageUrl, description }
    if (name) campusUpdate.name = name
    if (imageUrl) campusUpdate.imageUrl = imageUrl
    this.props.updateExistingCampus(campusUpdate)
  }


}

