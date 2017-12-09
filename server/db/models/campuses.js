//require db/sequelize from index
const db = require('../index')
const Sequelize = require('sequelize')

//layout students model - make sure to export as 'db'

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://oi66.tinypic.com/34do7cx.jpg'
  },
  description: {
    type: Sequelize.TEXT
  }
})

module.exports = Campuses;

