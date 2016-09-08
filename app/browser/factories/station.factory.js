'use strict'

app.factory('StationFactory', function(){
	var StationFactory = {};
	var currentStation;

	StationFactory.getStation = function(){
		return currentStation;
	}

	// retrieves station info at selected marker upon click
	StationFactory.setStation = function(station){
		currentStation = station;
	}
	return StationFactory;
})