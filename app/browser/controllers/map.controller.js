app.controller('MapCtrl', function($rootScope, $scope, NgMap, StationFactory) {

	NgMap.getMap().then(function(map) {
		// console.log(map.getCenter());
		// console.log('markers', map.markers);
		// console.log('shapes', map.shapes);
	});

	$scope.getInfo = function(event, station){
		StationFactory.setStation(station);
		$scope.stationId = StationFactory.getStation().station_id;
		console.log("CURRENT STATION ID", $scope.stationId);
	}

});