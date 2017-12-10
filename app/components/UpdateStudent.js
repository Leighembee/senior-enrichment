import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateExistingStudent } from './../reducers/students'


class UpdateStudent extends Component {
  constructor(props) {
    super(props)

    this.state = this.props.student
    // handle submits and changes here
    //bind to props here




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
        <form>

          </form>
        </div>
    )
  }

}
