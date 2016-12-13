'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  // beforeEach(function() {
  //   module(function($provide) {
  //     $provide.factory('splitio', function() {
  //       // mock splitio getTreatment method
  //       return {
  //         getTreatment() {
  //           return 'off';
  //         }
  //       };
  //     });
  //   });
  // });

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var view1Ctrl = $controller('View1Ctrl', { $scope });
      expect(view1Ctrl).toBeDefined();
    }));

    it('testing splitio instance', inject(function($controller) {
      //spec body
      var $scope = {};
      var view1Ctrl = $controller('View1Ctrl', { $scope });
      expect($scope.treatment).toEqual('off');
    }));
  });

});
