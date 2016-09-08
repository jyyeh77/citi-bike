'use strict'

app.factory('StationFactory', function () {
	var StationFactory = {};
	var stationStorage = {};
	var currentStation;
	var startAlreadySet;
	var endAlreadySet;

	// retrieves station info at selected marker upon click
	StationFactory.setStation = function (station) {
		currentStation = station;

		// if start isn't saved, set starting station - else set destination
		(!startAlreadySet) ? stationStorage['start'] = currentStation : (!endAlreadySet) ? stationStorage['end'] = currentStation : Object.freeze(stationStorage);
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

	StationFactory.saveEnd = function () {
		endAlreadySet = true;
	}

	return StationFactory;
})