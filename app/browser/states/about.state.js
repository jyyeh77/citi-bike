'use strict'

app.config(function($stateProvider){
	$stateProvider.state('about', {
		url: '/about',
		templateUrl: '/templates/about.template.html'
	})
})