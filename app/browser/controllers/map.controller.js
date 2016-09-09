app.controller('MapCtrl', function ($rootScope, $scope, StationFactory, uiGmapGoogleMapApi, uiGmapIsReady) {

	//put onto scope later
	const mapCenter = {latitude: 40.76, longitude: -73.98};
	const goldenrod = 'fafad2';
	const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|';

	//puts map object on root scope, unsure if needed
	uiGmapGoogleMapApi.then(maps=> {
		$rootScope.map = maps;
	});

	// need this to actually set markers correctly on markers directive
	uiGmapIsReady.promise()
		.then(function (instances) {
			$scope.stations = $rootScope.stations;

			StationFactory.setMarkers($scope.stations);
		})

	//an object with events as keys and even handlers as values
	$scope.events = {
		click: function (marker, eventName, models, arguments) {
			let station = models;
			(StationFactory.startLocked()) ? StationFactory.setEnd(station, marker) : StationFactory.setStart(station, marker);
		}
	};

	//puts info on scope, used in the template
	$scope.mapInfo = {center: mapCenter, zoom: 14, control: {}, markerControl: {}};
	$scope.options = {icon: `${icon}${goldenrod}`};

	// for clearing all markers
	$scope.$watch(function () {
			return StationFactory.getMarkerStatus();
		},
		function (status) {
			if (status) $scope.stations = [];
		}
	)
});