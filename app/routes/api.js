const express = require('express');
const request = require('request');
const router = express.Router();
const Station = require('../models/station');

router.get('/stations', function (req, res, next) {
	Station.findAll({
		attributes: ['station_id', 'name', 'lat', 'lon', 'capacity'],
		where: {
			capacity: {$gt: 0}
		}
	}).then(stations=> {
		res.send(stations).status(200);
	});
});

router.get('/scrape', function(req, res){
	scrapeStations(req, res);
})

module.exports = router;

function scrapeStations(req, res) {
	const url='https://gbfs.citibikenyc.com/gbfs/en/station_status.json';
	// Get all stations via GET request to URL
	request(url, function(error, response, html){
		if(!error){
			var allStations = JSON.parse(html).data.stations;
			// attaches last updated time to stations object
			// allStations.time = JSON.parse(html).last_updated;
			res.send(allStations);
		}
	})
}
