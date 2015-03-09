happinessApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');
    
    $stateProvider 

        // home state with nested views
        .state('home', { 
            url: '/home',
            templateUrl: 'html/home.html'
        })
        
        // nested view with anonymous controller
        .state('home.why', {
            url: '/why',
            templateUrl: 'html/home-why.html',
            controller: function($scope) {
                $scope.reasons = ['Happiness makes you happy.', 
                'Unhappiness makes you sad.', 
                'Tracking happiness can make you happy.',
                'Your sadness will sadden your mother'];
            }
        })
        
        // nested view
        .state('home.what', {
            url: '/what',
            templateUrl: 'html/home-what.html',
            controller: function($scope) {
                $scope.reasons = ['This app lets you track how happy you are at the moment.'];
            }
        })

        .state('home.purpose', {
            url: '/purpose',
            templateUrl: 'html/purpose.html',
            controller: 'ReasonsController'
        })
        
        // about state with named views
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'html/about.html' },
                'columnOne@about': { template: 'We are The Happiness People&#0153;.' },
                'columnTwo@about': { 
                    templateUrl: 'html/reasons-data.html',
                    controller: 'ReasonsController'
                }
            }
            
        })

        .state('average', {
            url: '/average',
            templateUrl: 'html/average.html',
            controller: 'ScoresController'
        })

        .state('track', {
            url: '/track',
            templateUrl: 'html/track.html',
            controller: 'ScoresController'
        })
        
        .state('home.overall', {
            url: '/overall',
            controller: 'ScoresController'
        })

    });