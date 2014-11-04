'use strict';

//<script src="/lib/ustodo/UtilClasscccc.js"></script>
//<script src="/lib/ustodo/UtilClass.js"></script>


//function loadScript(url, callback)
//{
//    // Adding the script tag to the head as suggested before
//    var head = document.getElementsByTagName('head')[0];
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.src = url;
//
//    // Then bind the event to the callback function.
//    // There are several events for cross browser compatibility.
//    script.onreadystatechange = callback;
//    script.onload = callback;
//
//    // Fire the loading
//    head.appendChild(script);
//}
//
//
//var myPrettyCode = function() {
//
//    console.log ("in here hk");
//    // Here, do what ever you want
//};
//

// Rawrecords2s controller
angular.module('rawrecords2s').controller('Rawrecords2sController', ['$scope', '$stateParams', '$location', 'Authentication', 'Rawrecords2s',
	function($scope, $stateParams, $location, Authentication, Rawrecords2s )
    {

		$scope.authentication = Authentication;

		// Create new Rawrecords2
		$scope.createhbkk = function() {
			// Create new Rawrecords2 object
            console.log ("--- hbkk 111111111111111 in rawrecords2s.client.controller.js $scope.create ");
			var rawrecords2 = new Rawrecords2s ({
				name: this.name
			});

            console.log ("--- hbkk 12121212121212 classinforawrecords2:" + utdapp.module_utilclass.sayhello("fff"));
            //console.log ("--- hbkk 12121212121212 classinforawrecords2:" + getClass ("hkdesc rawrecords2 ", rawrecords2));
            //console.log ("--- hbkk 12121212121212 classinforawrecords2:" + getClass ("hkdesc rawrecords2.parent", rawrecords2.parent));
            //console.log ("--- hbkk 12121212121212 classinfostateParams:" + getClass ("hkdesc $stateParams ", $stateParams));
            //console.log ("--- hbkk 12121212121212 classinfostateParams:" + getClass ("hkdesc $stateParams.parent ", $stateParams.parent));
            //console.log ("--- hbkk 12121212121212 classinfostateParams:" + getClass ("$stateParams hkdesc", $stateParams));
//            var xyz = 2;
//            console.log ("--- hbkk 1  2121212121212 hkdesc xyz2 :" + getClass ("hkdesc xyz2", null));



            //  console.log ("--- hbkk 2222222222222 in rawrecords2s.client.controller.js $scope.create ");

            //            $.getScript('/lib/ustodo/UtilClass.js', function()
            //            {
            //
            //                console.log ( "");
            //                getClassSub ("rawrecords2", rawrecords2);
            //                // script is now loaded and executed.
            //                // put your dependent JS here.
            //            });


			// Redirect after save
			rawrecords2.$save(function(response) {
				// $location.path('rawrecords2s/' + response._id);//hbkk path after create
				$location.path('rawrecords2s');

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Rawrecords2
		$scope.remove = function( rawrecords2 ) {
			if ( rawrecords2 ) { rawrecords2.$remove();

				for (var i in $scope.rawrecords2s ) {
					if ($scope.rawrecords2s [i] === rawrecords2 ) {
						$scope.rawrecords2s.splice(i, 1);
					}
				}
			} else {
				$scope.rawrecords2.$remove(function() {
					$location.path('rawrecords2s');
				});
			}
		};

		// Update existing Rawrecords2
		$scope.update = function() {     // hbkk comes from
			var rawrecords2 = $scope.rawrecords2 ;

			rawrecords2.$update(function() {
				$location.path('rawrecords2s/' + rawrecords2._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Rawrecords2s
		$scope.find = function() {

            //            console.log ("pre hijoey");
            //            sayhijoey();
            //            console.log ("post hijoey");
			$scope.rawrecords2s = Rawrecords2s.query();
		};

		// Find existing Rawrecords2
		$scope.findOne = function() {
			$scope.rawrecords2 = Rawrecords2s.get({ 
				rawrecords2Id: $stateParams.rawrecords2Id
			});
		};
	}
]);