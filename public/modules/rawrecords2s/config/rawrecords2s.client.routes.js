'use strict';

//Setting up route
angular.module('rawrecords2s').config(['$stateProvider',
	function($stateProvider) {          // hbkk dir rest client routes
		// Rawrecords2s state routing
		$stateProvider.
		state('listRawrecords2s', {
			url: '/rawrecords2s',
			templateUrl: 'modules/rawrecords2s/views/list-rawrecords2s.client.view.html'
		}).
		state('createRawrecords2', {
			url: '/rawrecords2s/create',
			templateUrl: 'modules/rawrecords2s/views/create-rawrecords2.client.view.html'
		}).
		state('viewRawrecords2', {
			url: '/rawrecords2s/:rawrecords2Id',
			templateUrl: 'modules/rawrecords2s/views/view-rawrecords2.client.view.html'
		}).
		state('editRawrecords2', {
			url: '/rawrecords2s/:rawrecords2Id/edit',
			templateUrl: 'modules/rawrecords2s/views/edit-rawrecords2.client.view.html'
		});
	}
]);