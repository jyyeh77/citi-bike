app.controller('MapCtrl', function ($rootScope, $scope, StationFactory, uiGmapGoogleMapApi) {

	//put onto scope later
	const mapCenter = {latitude: 40.76, longitude: -73.98};
	const goldenrod = 'fafad2';
	const icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|';

	//puts map object on root scope, unsure if needed
	uiGmapGoogleMapApi.then(maps=> {
		$rootScope.map = maps;
	});

	//an object with events as keys and even handlers as values
	$scope.events = {
		mouseup: function (marker, eventName, models, arguments) {
			let station = models.$parent.station;
			(StationFactory.startLocked()) ? StationFactory.setEnd(station, marker) : StationFactory.setStart(station, marker);
		}
	};

	//puts info on scope, used in the template
	$scope.mapInfo = {center: mapCenter, zoom: 14};
	$scope.options = {icon: `${icon}${goldenrod}`};
});