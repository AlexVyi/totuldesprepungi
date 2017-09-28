var app =  angular.module('slidesDirective',['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "index.html"
			})

			.when('/myth', {
			templateUrl: 'slides/myth.html'

			})

			.when('/degrade', {
				templateUrl: 'slides/degrade.html'

			})
			.when('/single', {
				templateUrl: 'slides/singleusemyth.html'

			})
			.when('/recycling', {
				templateUrl: 'slides/recycling.html'

			})
			.when('/pvspbag', {
				templateUrl: 'slides/papervsplastic.html'

			})
			.when('/pvspstudies', {
				templateUrl: 'slides/papervsplasticstudies.html'

			})
			.when('/reuse', {
				templateUrl: 'slides/reusablegreener.html'

			})
			.when('/types', {
				templateUrl: 'slides/typesofbags.html'

			})
			.when('/litter', {
				templateUrl: 'slides/litterthefacts.html'

			})
			.when('/phealth', {
				templateUrl: 'slides/publichealth.html'

			})
			.when('/ca', {
				templateUrl: 'slides/canadaupdate.html'

			})
			.when('/bags', {
				templateUrl: 'slides/bagsarroundtheworld.html'

			})
			.when('/oilmyth', {
				templateUrl: 'slides/oilmyth.html'

			})
			.when('/made', {
				templateUrl: 'slides/madeincanada.html'

			})
			.when('/ire', {
				templateUrl: 'slides/irelandbagtax.html'

			})
            .when('/bans', {
                templateUrl: 'slides/bansdontwork.html'

            })
            .when('/strategies', {
                templateUrl: 'slides/reductionstrategies.html'

            })
            .when('/wastediversion', {
                templateUrl: 'slides/wastediversion.html'

            })
            .when('/studies', {
                templateUrl: 'slides/studiesandstatistics.html'

            })



	}]);