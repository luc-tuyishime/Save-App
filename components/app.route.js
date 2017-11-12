save.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        redirectTo: '/signin'
    })
    .when('/signin',{
        templateUrl:'components/signin/loginView.html'
    })
    .when('/signup',{
        templateUrl:'components/signup/signupView.html'
    })
    .when('/forget-password',{
        templateUrl:'components/forget-password/forgetView.html'
    })
    .when('/change-password',{
        templateUrl:'components/changing-password/changingView.html'
    })
    .when('/project',{
        templateUrl:'components/project/projectView.html'
    })
    .when('/saving-group',{
        templateUrl:'components/saving-group/sgView.html'
    })
    .when('/settings',{
        templateUrl:'components/setting/settingView.html'
    })
    .when('/map',{
        templateUrl:'components/map/mapView.html'
    })
    .when('/404',{
        templateUrl:'components/404/404.html'
    })
    .otherwise({
        redirectTo: '/404'
    });
}]);
