'use strict'
const apiRouter = require('express').Router()
const db = require('../db')

const Students = require('./../db/models/students')



//*********students*******
  //find all students
apiRouter.get('/students', (req, res, next) => {
	Students.findAll()
		.then(students => res.send(students))
		.catch(next)
})

		//student by ID
apiRouter.get('/students/:studentId', (req,res,next) => {
	Students.findById(req.params.studentId)
		.then(student => res.send(student))
		.catch(next)
})
  //  post a new student
apiRouter.post('/students', (req,res,next) => {
	Students.create(req.body)
		.then((student) => res.json(student))
	  .catch(next)
})


//campuses



module.exports = apiRouter
