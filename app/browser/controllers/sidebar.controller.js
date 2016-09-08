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

	$scope.saveStart = function () {
		StationFactory.saveStart();
	}

	$scope.$watch(function(){ return StationFactory.getDestination(); },
		function (station) {
			$scope.endStation = station;
		}
	)
})