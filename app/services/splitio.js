'use strict';

var myService = angular.module('thirdParty', [])

myService.factory('splitio', function() {
  // Running the SDK in 'off-the-grid' Mode
  var sdk = splitio({
    core: {
      authorizationKey: 'localhost'
    },
    features: {
      sample: 'off'
    }
  });

  return sdk;
});
