'use strict'

app.controller('SidebarCtrl', function($scope, StationFactory){

	// will hide sidebar for now...
	$scope.setToggle = function () {
		$scope.isToggled = true;
	}

	// actively updates starting station in side-bar
	$scope.$watch(function () { return StationFactory.getStartStation(); },
		function (station) {
			$scope.startStation = station;
		}
	)

	// saves starting station and prevents additional stations from being set as start in factory
	$scope.saveStart = function () {
		StationFactory.saveStart();
	}

	// updates destination in side-bar
	$scope.$watch(function(){ return StationFactory.getDestination(); },
		function (station) {
			$scope.endStation = station;
		}
	)

	$scope.saveEnd = function () {
		StationFactory.saveEnd();
	}


})