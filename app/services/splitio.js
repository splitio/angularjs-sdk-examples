'use strict';

var splitService = angular.module('splitModule', [])

splitService.factory('splitio', function() {
  // Running the SDK in 'off-the-grid' Mode since authorizationKey : 'localhost'
  // To bind a real client, inject the api key using your favorite building framework.
  var sdk = splitio({
    core: {
      authorizationKey: 'localhost'
    },
    // In non-localhost mode, this map is ignored.
    features: {
      feature_1: 'off',
      feature_2: 'on',
      feature_3: 'v2'
    }
  });

  return sdk;
});
