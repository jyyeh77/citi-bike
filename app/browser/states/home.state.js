'use strict'

app.config(function($stateProvider){
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: '/templates/home.template.html',
		controller: 'MapCtrl'
	})
})
