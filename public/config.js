'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'ustodo';
	var applicationModuleVendorDependencies = ['ngResource', 'ui.router', 'ui.bootstrap', 'ui.utils'];

    console.log ("hbkk inside function ApplicationConfiguration");
	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

        console.log ("hbkk inside function ApplicationConfiguration moduleName:" + moduleName );
        //console.log ("hbkk inside function ApplicationConfiguration dependencies.length:" + dependencies.length);
        //var a = 1;
        //angular.forEach(dependencies, function(value) {
        //            console.log (a++ + '. angular.forEach value: ' + value);
        //        });

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

    var y = {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
    var z = angular.toJson(y); // hbkk works tojson
    console.log ("hbkk returning from function ApplicationConfiguration:" + z);

	return y;

})();