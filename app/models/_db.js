const Sequelize = require('sequelize');

const dbURL = 'postgres://localhost:5432/citibike';

const db = new Sequelize(dbURL, {
	logging: false
});

module.exports = db;
