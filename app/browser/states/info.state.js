/**
 * Created by jyyeh77 on 9/9/16.
 */

'use strict'

app.config(function($stateProvider){
	$stateProvider.state('info', {
		url: '/info',
		templateUrl: '/templates/info.template.html',
		controller: 'InfoCtrl',
		resolve: {
			stations: (StationFactory) => {
				return StationFactory.getAllStations();
			}
		}
	})
})