'use strict';

//Rawrecords2s service used to communicate Rawrecords2s REST endpoints
angular.module('rawrecords2s').factory('Rawrecords2s', ['$resource',
	function($resource) {
        console.log ("=== hbkk in rawrecords2s.client.service.js ")
		return $resource('rawrecords2s/:rawrecords2Id', { rawrecords2Id: '@_id'
		}, {
			update: {
				method: 'PUT'
                // may match with
                //    C:\141016UsToDoV2\app\routes\rawrecords2s.server.routes.js

                //    app.route('/rawrecords2s/:rawrecords2Id')
                //    //.get(users.requiresLogin, rawrecords2s.hasAuthorization, rawrecords2s.read) // hbkk dir auth
                //    .get(rawrecords2s.read)
                //    .put(users.requiresLogin, rawrecords2s.hasAuthorization, rawrecords2s.update)
                //    .delete(users.requiresLogin, rawrecords2s.hasAuthorization, rawrecords2s.delete);
			}
		});
	}
]);