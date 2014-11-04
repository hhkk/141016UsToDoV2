'use strict';

console.log ("aaaaaaaaaaaa ");
var o = projRequire('/public/lib/ustodo/o');     // hbkk app 1 gets hit
var uc = projRequire('/public/lib/ustodo/UtilClass');     // hbkk app 1 gets hit
console.log ("bbbbbbbbbbb ");

uc.sayhijoey(o, o);


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors'),
	Rawrecords2 = mongoose.model('Rawrecords2'),
	_ = require('lodash');

/**
 * Create a Rawrecords2
 */
exports.create = function(req, res) {
	var rawrecords2 = new Rawrecords2(req.body);
	rawrecords2.user = req.user;

	rawrecords2.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(rawrecords2);
		}
	});
};

/**
 * Show the current Rawrecords2
 */
exports.read = function(req, res) {
	res.jsonp(req.rawrecords2);
};

/**
 * Update a Rawrecords2
 */
exports.update = function(req, res) {
	var rawrecords2 = req.rawrecords2 ;

	rawrecords2 = _.extend(rawrecords2 , req.body);

	rawrecords2.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(rawrecords2);
		}
	});
};

/**
 * Delete an Rawrecords2
 */
exports.delete = function(req, res) {
	var rawrecords2 = req.rawrecords2 ;

	rawrecords2.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(rawrecords2);
		}
	});
};

/**
 * List of Rawrecords2s
 */
exports.list = function(req, res) { Rawrecords2.find().sort('-created').populate('user', 'displayName').exec(function(err, rawrecords2s) {

    console.log ("xxxxxxxxxxxx in list")

		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(rawrecords2s);
		}
        console.log ("xxxxxxxxxxxx in list")
        console.log ("xxxxxxxxxxxx done list")
	});
};

/**
 * Rawrecords2 middleware
 */

exports.rawrecords2ByID = function(req, res, next, id) { Rawrecords2.findById(id).populate('user', 'displayName').exec(function(err, rawrecords2) {
    o.o('hbkk in exports.rawrecords2ByID app controllers rawrecords.server.controller.js');

    if (err) return next(err);
		if (! rawrecords2) return next(new Error('Failed to load Rawrecords2 ' + id));
		req.rawrecords2 = rawrecords2 ;
		next();
	});
};

/**
 * Rawrecords2 authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.rawrecords2.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};