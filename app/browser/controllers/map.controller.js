app.controller('MapCtrl', function ($rootScope, $scope, StationFactory, uiGmapGoogleMapApi) {

	//put onto scope later
	const mapCenter = {latitude: 40.76, longitude: -73.98};

	//puts map object on root scope, unsure if needed
	uiGmapGoogleMapApi.then(maps=> {
		$rootScope.map = maps;
	});

	//an object with events as keys and even handlers as values
	$scope.events = {
		click: function (marker, eventName, models, arguments){
			marker.setIcon('startlogo.png');
		}
	};

	//puts info on scope, used in the template
	$scope.mapInfo = {center: mapCenter, zoom: 14};
});