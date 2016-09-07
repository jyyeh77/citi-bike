'use strict'

app.controller('SidebarCtrl', function($scope, stations){
	$scope.stations = stations;
	console.log($scope.stations);
})