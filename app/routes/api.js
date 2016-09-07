const express = require('express');
const router = express.Router();
const Station = require('../models/station');

router.get('/stations', function(req, res, next){
	Station.findAll({attributes: ['station_id', 'name', 'lat', 'lon']}).then(stations=>{
		res.send(stations).status(200);
	});
});


module.exports = router;