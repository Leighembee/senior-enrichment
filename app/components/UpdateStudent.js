import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExistingStudent } from './../reducers/students'


class UpdateStudent extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.student
     //bind to props here
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handle submits and changes here
  handleFirstNameChange(event){
    this.setState({ firstName: event.target.value })
  }
  handleLastNameChange(event){
    this.setState({ lastName: event.target.value })
  }
  handleImageChange(event) {
    this.setState({ imageUrl: event.target.value })
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault() //prevent annoying form defaults :)

    const { firstName, lastName, imageUrl, email, id } = this.state
    const editStudent = { id, firstName, lastName, imageUrl, email }
    firstName ? editStudent.firstName = firstName :
    lastName ? editStudent.lastName = lastName :
    imageUrl ? editStudent.imageUrl = imageUrl :
    email ? editStudent.email = email :
    this.props.updateExistingStudent(editStudent)
  }


  render() {
    return (
      <div>
          <h3>Update Student</h3>
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
            Photo:
            <input type="text" value={this.state.imageUrl}
              onChange={this.handleImageChange}/>
          </label>
           <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }

}

const mapStateToProps = ({ campuses, students }) => ({
  campuses, students
})

const mapDispatchToProps = { updateExistingStudent }

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
