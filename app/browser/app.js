var app = angular.module('citibike', ['ui.router', 'uiGmapgoogle-maps']);

app.config(function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: 'AIzaSyDBTSwLxyCS3yKklkOFjXFWZK274ycbK8Y',
		libraries: 'weather,geometry,visualization'
	});
});


app.run(function ($rootScope, $state, $http, $log){
	$http.get('/api/stations')
		.then(function(res){
			return res.data
		})
		.then(function(stations){
			//makes coords object on each station
			stations.forEach(station=>{
				station.coords = {
					latitude: station.lat,
					longitude: station.lon
				};
			});
			$rootScope.stations = stations;
			$state.go('home');
		})
		.catch($log)
});