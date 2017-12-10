import React, { Component } from 'react'
import NavBar from './NavBar'
import { withRouter } from 'react-router-dom'

const Root = ({ children }) => (
  <div>
    <NavBar />
    { children }
    </div>
)

export default withRouter(Root);
