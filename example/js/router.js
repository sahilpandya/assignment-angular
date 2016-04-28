app
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'assets/home.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
