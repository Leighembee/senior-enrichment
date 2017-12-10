import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExistingStudent } from './../reducers/students'


class UpdateStudent extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.student
     //bind to props here
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handle submits and changes here
  handleNameChange(event){
    this.setState({name: event.target.value})
  }
  handleImageChange(event) {
    this.setState({ image: event.target.value })
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault() //prevent annoying form defaults :)

    const { name, image, email, id } = this.state
    const editStudent = { id, name, image, email }
    name ? editStudent.name = name :
    image ? editStudent.image = image :
    email ? editStudent.email = email :
    this.props.updateExistingStudent(editStudent)
  }


  render() {
    return (
      <div>
          <h3>Update Student</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name}
              onChange={this.handleNameChange} />
          </label>
          <label>
            Email:
            <input type="text" value={this.state.email}
              onChange={this.handleEmailChange} />
            </label>
          <label>
            Photo:
            <input type="text" value={this.state.image}
              onChange={this.handleImageChange}/>
          </label>
           <input type="submit" value="Submit" />
          </form>
        </div>
    )
  }

}

const mapStateToprops = ({ campuses, students }) => ({
  campuses, students
})

const mapDispatchToProps = { updateExistingStudent }

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
