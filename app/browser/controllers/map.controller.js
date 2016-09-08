app.controller('MapCtrl', function($rootScope, $scope, NgMap, StationFactory) {

	NgMap.getMap().then(function(map) {
		// console.log(map.getCenter());
		// console.log('markers', map.markers);
		// console.log('shapes', map.shapes);
	});

	$scope.setStation = function(event, station){
		StationFactory.setStation(station);
		$scope.stationId = StationFactory.getStation().station_id;
		$scope.stationName = StationFactory.getStation().name;
		console.log("CURRENT STATION ID", $scope.stationId);
		$scope.stationSelected = true;
		console.log("STATION SELECTED: ", $scope.stationSelected)
	}

});