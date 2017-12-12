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
     gpa: '',
     imageUrl: 'http://oi66.tinypic.com/jskf3c.jpg',
     campusId: ''
    }
//bind handles here
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleGradeChange = this.handleGradeChange.bind(this)
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
  handleGradeChange(event) {
    this.setState({gpa: event.target.value})
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
    this.setState({ name: '', email: '', gpa: '', imageUrl: '' })

  }

  //render - form here
  render() {
    const { campuses } = this.props
    return (
      <div className="add-student">
        <h3>Add a Student: </h3>
        <form action="#" method="post" target="_blank" onSubmit={this.handleSubmit} className="form-horizontal">


          <div className="form-group">
            <div className="input-styles">
          <label className="col-form-label">
            <h6>First Name:</h6>
            <input type="text" className="form-control-sm" placeholder="first name" value={this.state.firstName}
              onChange={this.handleFirstNameChange} />
              </label>
            </div>


            <div className="input-styles">
          <label className="col-form-label">
            <h6>Last Name:</h6>
            <input type="text" className="form-control-sm" value={this.state.lastName}
              onChange={this.handleLastNameChange} />
              </label>
          </div>


            <div className="input-styles">
          <label className="col-form-label">
            <h6>Email:</h6>
            <input type="text" className="form-control-sm" value={this.state.email}
              onChange={this.handleEmailChange} />
              </label>
            </div>


            <div className="input-styles">
          <label className="col-form-label">
            <h6>gpa:</h6>
            <input type="integer" className="form-control-sm" value={this.state.gpa}
              onChange={this.handleGradeChange} />
              </label>
            </div>


            <div className="input-styles">
          <label className="col-form-label">
            <h6>Image Link:</h6>
            <input type="text" className="form-control-sm" value={this.state.imageUrl}
              onChange={this.handleImageChange} />
              </label>
            </div>


            <div className="input-styles">
            <label className="col-form-label">
            <h6>Campus:</h6>
            <select value={this.state.campusId} onChange={this.handleCampusChange}>
                  <option value={-1}>select a campus</option>
              {campuses.map(campus => (
                <option key={campus.id} value={campus.id}>{campus.name}</option>
              ))}
                </select>
              </label>
              </div>
          </div>

            <input type="submit" value="Submit" />

        </form>
       </div>
     )


  }

}

// statetoprops - maptoprops
//connect
const mapStateToProps = ({ campuses }) => ({ campuses })
const mapDispatchToProps = {createNewStudent}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)
