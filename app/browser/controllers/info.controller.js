'use strict'

app.controller('InfoCtrl', function($scope, stations, StationFactory){

	// retrieves start/end stations from all stations passed in via 'info' state resolve
	stations.forEach(station => {
		if (parseInt(station.station_id) === StationFactory.getStart().station_id) {
			$scope.start = station;
			$scope.start.name = StationFactory.getStart().name;
		}
		if (parseInt(station.station_id) === StationFactory.getEnd().station_id) {
			$scope.end = station
			$scope.end.name = StationFactory.getEnd().name;
		}
	})

})