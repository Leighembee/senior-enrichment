import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNewStudent } from './../reducers/students'


class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
     firstName: '',
     lastName: '',
     email: '',
     imageUrl: 'http://oi66.tinypic.com/jskf3c.jpg',
     campusId: ''
    }
//bind handles here
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleCampusChange = this.handleCampusChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
//handlers here

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value})
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value})
  }
  handleImageChange(event) {
    this.setState({imageUrl: event.target.value})
  }
  //if the event exists then set state of campus id the event target val..else send an alert that a campus must be added!
  handleCampusChange(event) {
    this.setState({ campusId: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    const student = this.state
    console.log('submitted', student)
    this.props.createNewStudent(student)
    this.setState({ name: '', email: '', imageUrl: '' })

  }

  //render - form here
  render() {
    const { campuses } = this.props
    return (
      <div>
        <h3>Add a Student: </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName}
              onChange={this.handleFirstNameChange} />
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName}
              onChange={this.handleLastNameChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email}
              onChange={this.handleEmailChange} />
          </label>
          <label>
            Image Link:
            <input type="text" value={this.state.imageUrl}
              onChange={this.handleImageChange} />
          </label>
          <label>
            Campus:
            <select value={this.state.campusId} onChange={this.handleCampusChange}>
              <option value={-1}>Select a campus</option>
              {campuses.map(campus => (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              ))}
              </select>
          </label>

            <input type="submit" value="Submit" />

        </form>
       </div>
     )


  }

}

// statetoprops - maptoprops
//connect
const mapStateToProps = ({ campuses}) => ({ campuses})
const mapDispatchToProps = {createNewStudent}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
