import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewCampus } from './../reducers/campuses'


class AddCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      imageUrl: 'http://oi66.tinypic.com/34do7cx.jpg',
      description: ''
    }
    //bind handles here
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //handlers here

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  handleImageChange(event) {
    this.setState({ imageUrl: event.target.value })
  }
  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const campus = this.state
    console.log('submitted', campus)
    this.props.createNewCampus(campus)
    this.setState({ name: '', imageUrl: '', description: '' })

  }

  render() {
    // this is for styling
    document.getElementById('campusForm')
    document.getElementById('formBtn')
    document.getElementById('close')

    const { students } = this.props
    return (
      <div>
        <button id="formBtn" onClick={() => { campusForm.style.display='block' }} >
          <h3>Add a new Campus: </h3>
        </button>
        <div id="campusForm">
          <div id="campusContent">
            <span id="close" onClick={() => { campusForm.style.display='none'}}>X</span>
        <form onSubmit={this.handleSubmit}>
            <label>
              Name:
            <input type="text" value={this.state.name}
                onChange={this.handleNameChange} />
            </label>
            <label>
              Image Link:
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
        </div>
      </div>
    )


  }

}

// statetoprops - maptoprops
//connect
const mapStateToProps = ({ students }) => ({ students })
const mapDispatchToProps = { createNewCampus }

export default connect(mapStateToProps, mapDispatchToProps)(AddCampus)
