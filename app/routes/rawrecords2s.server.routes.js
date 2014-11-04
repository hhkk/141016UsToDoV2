'use strict';

var o = projRequire('/public/lib/ustodo/o');     // hbkk app 1 gets hit

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var rawrecords2s = require('../../app/controllers/rawrecords2s');

	// Rawrecords2s Routes
	app.route('/rawrecords2s')
		.get(rawrecords2s.list)
		.post(users.requiresLogin, rawrecords2s.create);

    // hbkk server route for http://localhost:3000/rawrecords2cust
    app.route('/rawrecords2cust')
        .all(function(req, res, next) {
            console.log (" ---------------- you made it hk 1a1 !!!!");
            o.o (" ---------------- you made it hk 1a2 server route rawrecords2cust !!!!");
            res.send('Hello World from rawrecords2cust');
            o.o (" ---------------- you made it hk 1b server route rawrecords2cust !!!!");
            // runs afor all HTTP verbs first
            // think of it as route specific middleware!
        });

	app.route('/rawrecords2s/:rawrecords2Id')
		//.get(users.requiresLogin, rawrecords2s.hasAuthorization, rawrecords2s.read) // hbkk dir auth
		.get(rawrecords2s.read)
		.put(users.requiresLogin, rawrecords2s.hasAuthorization, rawrecords2s.update)
		.delete(users.requiresLogin, rawrecords2s.hasAuthorization, rawrecords2s.delete);

	// Finish by binding the Rawrecords2 middleware
	app.param('rawrecords2Id', rawrecords2s.rawrecords2ByID);
};