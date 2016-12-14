'use strict';

angular.module('myApp.view2', ['ngRoute', 'splitModule'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'splitio', function($scope, splitio) {
  $scope.feature_1 = splitio.getTreatment('feature_1');
  $scope.feature_2 = splitio.getTreatment('feature_2');
  $scope.feature_3 = splitio.getTreatment('feature_3');
}]);
