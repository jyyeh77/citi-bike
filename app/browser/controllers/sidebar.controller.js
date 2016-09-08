'use strict'

app.controller('SidebarCtrl', function($scope, StationFactory){

	// actively updates starting station in side-bar
	$scope.$watch(function () { return StationFactory.getStation(); },
		function (station) {
			$scope.startStation = station;
		}
	)
})