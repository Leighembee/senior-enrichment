import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExistingStudent } from './../reducers/students'


class UpdateStudent extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.student

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

  handleCampusChange(event) {
    this.setState({ campusId: event.target.value })
  }
  handleSubmit(event) {

    event.preventDefault();
    const {id, firstName, lastName, imageUrl, email, campusId} = this.state;
    const studentUpdate = {id, firstName, imageUrl, email};
    if (firstName) studentUpdate.firstName = firstName;
    if (lastName) studentUpdate.lastName = lastName;
    if (imageUrl) studentUpdate.imageUrl = imageUrl;
    if (email) studentUpdate.email = email;
    this.props.updateExistingStudent(studentUpdate)
  }

  render() {
    return (
      <div>
        <h3>Update this student: </h3>
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
          {/* <label>
            Campus:
            <select value={this.state.campusId} onChange={this.handleCampusChange}>
              <option value={-1}>Select a campus</option>
              {campuses.map(campus => (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              ))}
              </select>
          </label> */}

            <input type="submit" value="Submit" />

        </form>
       </div>
     )


  }

}

const mapStateToProps = ({ campuses, students }) => ({ campuses, students });
const mapDispatchToProps = { updateExistingStudent };


export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
