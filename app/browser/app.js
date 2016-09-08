var app = angular.module('citibike', ['ui.router', 'ngMap']);

app.run(function ($rootScope, $state, $http, $log){
	$http.get('/api/stations')
		.then(function(res){
			return res.data
		})
		.then(function(stations){
			$rootScope.stations = stations;
			$state.go('home');
		})
		.catch($log)
})