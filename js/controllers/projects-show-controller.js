var spDesign = angular.module('spControllers', []);

spDesign.controller('ProjectListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('projects/projects.json').success(function(data) {    
            $scope.projects = data;
        });
    }]);

spDesign.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
        $http.get('projects/' + $routeParams.id + '.json').success(function(data) {
            $scope.project = data;
        });
    }]);