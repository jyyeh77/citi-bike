'use strict';

app.controller('SidebarCtrl', function ($scope, StationFactory) {

	// will hide sidebar for now...
	$scope.setToggle = function () {
		$scope.isToggled = true;
	};

	// updates starting station in side-bar
	$scope.$watch(()=> {
		return StationFactory.getStart();
	}, (start)=> {
		$scope.start = start;
	});

	// updates end station in side-bar
	$scope.$watch(()=> {
		return StationFactory.getEnd();
	}, (end)=> {
		$scope.end = end;
	});

	// after start is set, removes set start button in side-bar
	$scope.$watch(()=> {
		return StationFactory.startLocked();
	}, (startLocked)=> {
		$scope.startLocked = startLocked;
	});

	// same as previous, except for set end button
	$scope.$watch(()=> {
		return StationFactory.endLocked();
	}, (endLocked)=> {
		$scope.endLocked = endLocked;
	});

	// to clear start station
	$scope.unlockStart = function () {
		StationFactory.unlockStart();
	};

	// clears end station
	$scope.unlockEnd = function () {
		StationFactory.unlockEnd();
	};

	// booleans for showing delete buttons for start/end
	$scope.lockStart = StationFactory.lockStart;
	$scope.lockEnd = StationFactory.lockEnd;

	$scope.resetMarkers = function () {
		StationFactory.resetMarkers();
	}

});