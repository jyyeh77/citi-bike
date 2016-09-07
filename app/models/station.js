const Sequelize = require('sequelize');
const db = require('./_db');

const Station = db.define('station', {
	station_id: Sequelize.INTEGER,
	name: Sequelize.STRING,
	lat: Sequelize.FLOAT,
	lon: Sequelize.FLOAT,
	region_id: Sequelize.INTEGER,
	capacity: Sequelize.INTEGER
});

module.exports = Station;