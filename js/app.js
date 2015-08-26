var spDesign = angular.module('spDesign', [
    'ngRoute',
    'spControllers',
    'spAnimations'
]);

spDesign.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            redirectTo: '/home'  
        })
        .when('/home', {
            templateUrl: 'templates/pages/home/index.html'  
        })  
        .when('/about', {
            templateUrl: '/templates/pages/about/index.html'
        })
        .when('/contact', {
            templateUrl: 'templates/pages/contact/index.html'  
        })
        .when('/portfolio', {
            templateUrl: 'templates/pages/portfolio/index.html',
            controller: 'ProjectListCtrl'
        })
        .when('/project/:id', {
            templateUrl: 'templates/pages/project/index.html',
            controller: 'ProjectDetailCtrl'
        })
        .when('/resume', {
            templateUrl: 'templates/pages/resume/index.html'   
        })
        .otherwise({
            redirectTo: '/home'
        })
        ;
}]);