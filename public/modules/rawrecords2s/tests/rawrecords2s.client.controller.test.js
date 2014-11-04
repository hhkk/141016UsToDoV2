'use strict';

(function() {
	// Rawrecords2s Controller Spec
	describe('Rawrecords2s Controller Tests', function() {
		// Initialize global variables
		var Rawrecords2sController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Rawrecords2s controller.
			Rawrecords2sController = $controller('Rawrecords2sController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Rawrecords2 object fetched from XHR', inject(function(Rawrecords2s) {
			// Create sample Rawrecords2 using the Rawrecords2s service
			var sampleRawrecords2 = new Rawrecords2s({
				name: 'New Rawrecords2'
			});

			// Create a sample Rawrecords2s array that includes the new Rawrecords2
			var sampleRawrecords2s = [sampleRawrecords2];

			// Set GET response
			$httpBackend.expectGET('rawrecords2s').respond(sampleRawrecords2s);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.rawrecords2s).toEqualData(sampleRawrecords2s);
		}));

		it('$scope.findOne() should create an array with one Rawrecords2 object fetched from XHR using a rawrecords2Id URL parameter', inject(function(Rawrecords2s) {
			// Define a sample Rawrecords2 object
			var sampleRawrecords2 = new Rawrecords2s({
				name: 'New Rawrecords2'
			});

			// Set the URL parameter
			$stateParams.rawrecords2Id = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/rawrecords2s\/([0-9a-fA-F]{24})$/).respond(sampleRawrecords2);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.rawrecords2).toEqualData(sampleRawrecords2);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Rawrecords2s) {
			// Create a sample Rawrecords2 object
			var sampleRawrecords2PostData = new Rawrecords2s({
				name: 'New Rawrecords2'
			});

			// Create a sample Rawrecords2 response
			var sampleRawrecords2Response = new Rawrecords2s({
				_id: '525cf20451979dea2c000001',
				name: 'New Rawrecords2'
			});

			// Fixture mock form input values
			scope.name = 'New Rawrecords2';

			// Set POST response
			$httpBackend.expectPOST('rawrecords2s', sampleRawrecords2PostData).respond(sampleRawrecords2Response);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Rawrecords2 was created
			expect($location.path()).toBe('/rawrecords2s/' + sampleRawrecords2Response._id);
		}));

		it('$scope.update() should update a valid Rawrecords2', inject(function(Rawrecords2s) {
			// Define a sample Rawrecords2 put data
			var sampleRawrecords2PutData = new Rawrecords2s({
				_id: '525cf20451979dea2c000001',
				name: 'New Rawrecords2'
			});

			// Mock Rawrecords2 in scope
			scope.rawrecords2 = sampleRawrecords2PutData;

			// Set PUT response
			$httpBackend.expectPUT(/rawrecords2s\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/rawrecords2s/' + sampleRawrecords2PutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid rawrecords2Id and remove the Rawrecords2 from the scope', inject(function(Rawrecords2s) {
			// Create new Rawrecords2 object
			var sampleRawrecords2 = new Rawrecords2s({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Rawrecords2s array and include the Rawrecords2
			scope.rawrecords2s = [sampleRawrecords2];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/rawrecords2s\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleRawrecords2);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.rawrecords2s.length).toBe(0);
		}));
	});
}());