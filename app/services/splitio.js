'use strict';

var splitService = angular.module('splitModule', [])

splitService.factory('splitio', function() {
  // Running the SDK in 'off-the-grid' Mode since authorizationKey : 'localhost'
  // To bind a non 'off-the-grid' client, inject the real API Key
  var sdk = splitio({
    core: {
      authorizationKey: 'localhost',
      key: 'customer-key'
    },
    // In non-localhost mode, this map is ignored.
    features: {
      feature_1: 'off',
      feature_2: 'on',
      feature_3: 'v2'
    }
  });

  return sdk.client();
});
