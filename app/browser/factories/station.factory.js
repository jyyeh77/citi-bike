'use strict'

app.factory('StationFactory', function(){
	var StationFactory = {};
	var stationStorage = {};
	var startStation;
	var currentStation;
	var startAlreadySet;

	StationFactory.getStation = function(){
		return currentStation;
	}

	// retrieves station info at selected marker upon click
	StationFactory.setStation = function(station){
		currentStation = station;
		// if (!stationStorage[startStation.station_id]) {
		// 	stationStorage[startStation.station_id] = '';
		// 	startAlreadySet = true;
		// } else {
		// 	if (Object.keys(stationStorage).includes(startStation.station_id))
		// }
	}

	StationFactory.getStartStatus = function(){
		return startAlreadySet;
	}
	return StationFactory;
})