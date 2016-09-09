'use strict';

app.factory('StationFactory', function ($rootScope) {
	let StationFactory = {};
	let start = null;
	let end = null;
	let startLocked = false;
	let endLocked = false;
	let startMarker;
	let endMarker;
	let markers;
	let markerReset = false;

	//icon stuff
	const goldenrod = 'fafad2'; //default color
	const red = 'ff4500'; //end color
	const blue = '1e90ff'; //start color
	const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|';

	//setters
	StationFactory.setStart = function (station, marker) {
		if(startMarker)
			startMarker.setIcon(`${icon}${goldenrod}`);
		startMarker = marker;
		startMarker.setIcon(`${icon}${blue}`);
		start = station;
	};

	StationFactory.setEnd = function (station, marker) {
		if (!endLocked) {
			if(endMarker)
				endMarker.setIcon(`${icon}${goldenrod}`);
			endMarker = marker;
			endMarker.setIcon(`${icon}${red}`);
			end = station;
		}
	};

	//getters
	StationFactory.getStart = function () {
		return start;
	};

	StationFactory.getEnd = function () {
		return end;
	};

	//lock and unlock
	StationFactory.startLocked = function(){
		return startLocked;
	};

	StationFactory.endLocked = function () {
		return endLocked;
	};

	StationFactory.lockStart = function () {
		startLocked = true;
	};

	StationFactory.lockEnd = function () {
		endLocked = true;
		endMarker.setIcon(`${icon}${red}`);
	};

	// reset station icon color back to default after deletion of selected start selection
	StationFactory.unlockStart = function () {
		startMarker.setIcon(`${icon}${goldenrod}`);
		startLocked = false;
		start = null;
	};

	// same as unlockStart
	StationFactory.unlockEnd = function () {
		endMarker.setIcon(`${icon}${goldenrod}`);
		endLocked = false;
		end = null;
	};

	StationFactory.setMarkers = function(markerArray) {
		markers = markerArray;
		console.log("MARKERS IN FACTORY: ", markers);
	};

	StationFactory.resetMarkers = function(){
		markerReset = true;
	}

	StationFactory.getMarkerStatus = function(){
		return markerReset;
	}

	return StationFactory;
});