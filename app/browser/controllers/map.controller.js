app.controller('MapCtrl', function($rootScope, $scope, NgMap, StationFactory) {

	NgMap.getMap().then(function(map) {
		// console.log(map.getCenter());
		// console.log('markers', map.markers);
		// console.log('shapes', map.shapes);
	});

	$scope.setStation = function(event, station){
		// this sets selected station in factory, will be either start/destination depending on factory variables
		StationFactory.setStation(station);

		// this isn't useful right now!
		$scope.stationId = StationFactory.getStartStation().station_id;
		$scope.stationName = StationFactory.getStartStation().name;
		console.log("CURRENT STATION ID", $scope.stationId);
		$scope.stationSelected = true;
		console.log("STATION SELECTED: ", $scope.stationSelected)
	}

});