//require db/sequelize from index
const db = require('../index')
const Sequelize = require('sequelize')

//layout students model - make sure to export as 'db'

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    isUnique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }

  },

  imageUrl: {
    type: Sequelize.STRING,
  },

})

module.exports = Students;


