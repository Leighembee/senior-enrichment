import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExistingCampus } from './../reducers/campuses'

class UpdateCampus extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.campus
    console.log(this.props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    const { id, name, imageUrl, description} = this.state
    const campusUpdate = { id, name, imageUrl, description}
    if (name) campusUpdate.name = name
    if (imageUrl) campusUpdate.imageUrl = imageUrl
    if(description) campusUpdate.description = description;
    this.props.updateExistingCampus(campusUpdate)
  }

  render() {
    return (
      <div>
        <h3>Update this campus</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name}
              onChange={this.handleNameChange} />
          </label>
          <label>
            Link to image:
            <input type="text" value={this.state.imageUrl}
              onChange={this.handleImageChange} />
          </label>
          <label>
            Description:
            <input type="text" value={this.state.description}
              onChange={this.handleDescriptionChange} />
          </label>
              <input type="submit" value="Submit" />
        </form>
        </div>
    )
  }

}


const mapStateToProps = ({ campuses, students }) => ({ campuses, students });
const mapDispatchToProps = { updateExistingCampus };


export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus)
