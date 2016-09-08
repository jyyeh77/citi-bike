'use strict'

app.factory('StationFactory', function () {
	var StationFactory = {};
	var stationStorage = {};
	var startStation;
	var currentStation;
	var startAlreadySet;

	// retrieves station info at selected marker upon click
	StationFactory.setStation = function (station) {
		currentStation = station;

		// if start isn't saved, set starting station - else set destination
		(!startAlreadySet) ? stationStorage['start'] = currentStation : stationStorage['end'] = currentStation;
		console.log("STATION STORAGE: ", stationStorage);
	}

	// functions for starting station!
	StationFactory.getStartStation = function () {
		return stationStorage.start;
	}

	StationFactory.getStartStatus = function () {
		return startAlreadySet;
	}
	StationFactory.saveStart = function () {
		startAlreadySet = true;
	}

	// for destinations
	StationFactory.getDestination = function () {
		return stationStorage.end;
	}

	return StationFactory;
})