'use strict';

var myService = angular.module('thirdParty', [])

myService.factory('splitio', function() {
  // Running the SDK in 'off-the-grid' Mode
  var sdk = splitio({
    core: {
      authorizationKey: 'localhost'
    },
    features: {
      feature_1: 'off',
      feature_2: 'on',
      feature_3: 'v2'
    }
  });

  return sdk;
});
