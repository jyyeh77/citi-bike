'use strict'

// TODO: Do we actually need this??
app.controller('SidebarCtrl', function($scope, StationFactory){
	$scope.getStart = function(){
		$scope.start = StationFactory.getStation();
	}
})