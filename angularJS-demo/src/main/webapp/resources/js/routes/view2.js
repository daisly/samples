/**
 * Created with IntelliJ IDEA. User: Mateusz Date: 14.11.12 Time: 20:21
 */

'use strict';

define([ 'app' ], function(app) {
	return app.config(function($routeProvider) {
		$routeProvider.when('/view2', {
			templateUrl:'view2.jsp'
		});
	});
});
