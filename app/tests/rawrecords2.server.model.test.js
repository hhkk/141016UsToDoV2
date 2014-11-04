'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Rawrecords2 = mongoose.model('Rawrecords2');

/**
 * Globals
 */
var user, rawrecords2;

/**
 * Unit tests
 */
describe('Rawrecords2 Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			rawrecords2 = new Rawrecords2({
				name: 'Rawrecords2 Name',
				user: user
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return rawrecords2.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

		it('should be able to show an error when try to save without name', function(done) { 
			rawrecords2.name = '';

			return rawrecords2.save(function(err) {
				should.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Rawrecords2.remove().exec();
		User.remove().exec();

		done();
	});
});