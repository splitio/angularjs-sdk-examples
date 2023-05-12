'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('View 1 Module', function(){

    it('View 1 Controller should be defined', inject(function($controller) {
      var $scope = {};
      var view1Ctrl = $controller('View1Ctrl', { $scope });
      expect(view1Ctrl).toBeDefined();
    }));

    it('Scneario where splitio sdk use off-the-grid mode', inject(function($controller) {
      var $scope = {};
      var view1Ctrl = $controller('View1Ctrl', { $scope });
      expect($scope.feature_flag_1).toEqual('off');
      expect($scope.feature_flag_2).toEqual('on');
      expect($scope.feature_flag_3).toEqual('v2');
    }));
  });

});
