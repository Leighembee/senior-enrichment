'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
const Campuses = require('./../db/models/campuses')
const Students = require('./../db/models/students')



//*********students*******
  //navigate to all students
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
  // create a student
apiRouter.post('/students/', (req,res,next) => {
	Students.create(req.body)
		.then((student) => res.json(student))
	  .catch(next)
})

//update a student
apiRouter.put('/students/:studentId', (req, res, next) => {
	const studentId = req.params.studentId
	Students.findOne({
		where: {
			id: studentId
		}
	})
		.then(student => student.update(req.body))
		.then(student => res.json(student))
	  .catch(next)
})

//delete a student
apiRouter.delete('/students/:studentId', (req, res, next) => {
	const studentId = req.params.studentId
	console.log('entering route', studentId)
	Students.destroy({
		where: {
			id: studentId
		}
	})
		.then(() => {
			console.log('exiting route')
			res.send()
		})
		.catch(next)

})





//********campuses */

  //navigate to all campuses
	apiRouter.get('/campuses', (req, res, next) => {
		Campuses.findAll()
			.then(campuses => res.send(campuses))
			.catch(next)
	})

			//campus by ID
	apiRouter.get('/campuses/:campusId', (req,res,next) => {
		Campuses.findById(req.params.campusId)
			.then(campus => res.send(campus))
			.catch(next)
	})
		// create a campus
	apiRouter.post('/campuses', (req,res,next) => {
		Campuses.create(req.body)
			.then((campus) => res.json(campus))
			.catch(next)
	})

	//update a campus
	apiRouter.put('/:campusId', (req, res, next) => {
		const campusId = req.params.campusId
		Campuses.findOne({
			where: {
				id: campusId
			}
		})
			.then(campus => campus.update(req.body))
			.then(campus => res.json(campus))
			.catch(next)
	})

	//delete a campus
	apiRouter.delete('/:campusId', (req, res, next) => {
		const campusId = req.params.campusId
		Campuses.destroy({
			where: {
				id: campusId
			}
		})
			.then(() => res.status(204).end())
			.catch(next)

	})




module.exports = apiRouter
