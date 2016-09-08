'use strict';

app.controller('SidebarCtrl', function ($scope, StationFactory) {

	// will hide sidebar for now...
	$scope.setToggle = function () {
		$scope.isToggled = true;
	};

	$scope.$watch(()=> {
		return StationFactory.getStart();
	}, (start)=> {
		$scope.start = start;
	});

	$scope.$watch(()=> {
		return StationFactory.getEnd();
	}, (end)=> {
		$scope.end = end;
	});

	$scope.$watch(()=> {
		return StationFactory.startLocked();
	}, (startLocked)=> {
		$scope.startLocked = startLocked;
	});

	$scope.$watch(()=> {
		return StationFactory.endLocked();
	}, (endLocked)=> {
		$scope.endLocked = endLocked;
	});

	$scope.unlockStart = function () {
		StationFactory.unlockStart();
	};


	$scope.unlockEnd = function () {
		StationFactory.unlockEnd();
	};

	$scope.lockStart = StationFactory.lockStart;
	$scope.lockEnd = StationFactory.lockEnd;

});