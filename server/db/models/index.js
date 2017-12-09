'use strict';
const db = require('../index');
const Students = require('./students')
const Campuses = require('./campuses')


// students have one campus, and each campus can have many students

Students.belongsTo(Campuses)
Campuses.hasMany(Students, {
  onDelete: 'cascade',
  hooks: true
})


module.exports = db
