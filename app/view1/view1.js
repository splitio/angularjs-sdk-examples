'use strict';

angular.module('myApp.view1', ['ngRoute', 'thirdParty'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'splitio', function($scope, splitio) {
  $scope.feature_1 = splitio.getTreatment('feature_1');
  $scope.feature_2 = splitio.getTreatment('feature_2');
  $scope.feature_3 = splitio.getTreatment('feature_3');
}]);
