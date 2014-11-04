'use strict';

// Configuring the Articles module
angular.module('rawrecords2s').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Rawrecords2s', 'rawrecords2s', 'dropdown', '/rawrecords2s(/create)?');
		Menus.addSubMenuItem('topbar', 'rawrecords2s', 'List Rawrecords2s', 'rawrecords2s');
		Menus.addSubMenuItem('topbar', 'rawrecords2s', 'New Rawrecords2', 'rawrecords2s/create');
	}
]);