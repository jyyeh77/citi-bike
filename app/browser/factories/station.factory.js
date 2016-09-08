'use strict';

app.factory('StationFactory', function ($rootScope) {
	let StationFactory = {};
	StationFactory.start = null;
	StationFactory.end = null;

	StationFactory.setStart = function (station, marker) {
		marker.setIcon('startLogo.png');
		StationFactory.start = station;
	};

	StationFactory.setEnd = function (station, marker) {
		marker.setIcon('endLogo.png');
		StationFactory.end = station;
	};

	return StationFactory;
});