'use strict';

angular.module('myApp.view1', ['ngRoute', 'thirdParty'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'splitio', function($scope, splitio) {
  $scope.treatment = splitio.getTreatment('sample');
}]);
