/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'thaxton',
    environment: environment,
    contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    torii: {
    sessionServiceName: 'session'
    },
    firebase: {
    apiKey: 'AIzaSyCE0GfMu1Y_8GLcz3oKLTi5ZSF3vLAMtj8',
    authDomain: 'thaxton-ambassadors-club.firebaseapp.com',
    databaseURL: 'https://thaxton-ambassadors-club.firebaseio.com',
    storageBucket: 'thaxton-ambassadors-club.appspot.com'
    },
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
