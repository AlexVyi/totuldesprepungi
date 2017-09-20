var app =  angular.module('slidesDirective',['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "index.html"
			})

			.when('/myth', {
			templateUrl: 'slides/myth.html'

		});
	}])