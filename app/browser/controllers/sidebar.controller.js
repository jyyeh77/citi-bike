'use strict';

app.controller('SidebarCtrl', function($scope, StationFactory){

	// will hide sidebar for now...
	$scope.setToggle = function () {
		$scope.isToggled = true;
	};

	$scope.$watch(()=> {
		return StationFactory.start;
	}, (start)=> {
		$scope.start = start;
	});

	$scope.$watch(()=> {
		return StationFactory.end;
	}, (end)=> {
		$scope.end = end;
	})

});