const express = require('express');
const request = require('request');
const router = express.Router();
const Station = require('../models/station');

// route to load all station markers from DB
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

// route for live-scraping of station information from Citi-bike site
router.get('/scrape', function(req, res){
	scrapeStations(req, res);
})

module.exports = router;

function scrapeStations(req, res) {
	const url='https://gbfs.citibikenyc.com/gbfs/en/station_status.json';
	// Get all stations via GET request to URL
	request(url, function(error, response, html){
		if(!error){
			let allStations = JSON.parse(html).data.stations;
			// attaches last updated time to stations object
			var updateTime = JSON.parse(html).last_updated;
			allStations.push({lastUpdate: updateTime});
			res.send(allStations);
		}
	})
}
