'use strict';

describe('View 2 Module', function() {

  beforeEach(module('myApp.view2'));

  /**
   * It's possible to mock everithing you want using angular mock.
   */
  beforeEach(function() {
    module(function($provide) {
      $provide.factory('splitio', function() {
        // mock splitio getTreatment method
        return {
          getTreatment() {
            return 'off';
          }
        };
      });
    });
  });

  describe('view2 controller', function(){

    it('View 2 Controller should be defined', inject(function($controller) {
      var $scope = {};
      var view2Ctrl = $controller('View2Ctrl', { $scope });
      expect(view2Ctrl).toBeDefined();
    }));

    it('Scenario where splitio sdk is mocked using angular mock', inject(function($controller) {
      var $scope = {};
      var view1Ctrl = $controller('View2Ctrl', { $scope });
      expect($scope.feature_1).toEqual('off');
      expect($scope.feature_2).toEqual('off');
      expect($scope.feature_3).toEqual('off');
    }));

  });
});
