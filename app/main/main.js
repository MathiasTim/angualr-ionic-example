'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'LocalForageModule'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  console.log('Allo! Allo from your module: ' + 'main');

  $urlRouterProvider.otherwise('/main');

  // some basic routing
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'main/templates/start.html',
      controller: 'StartCtrl as start',
      // a resolve can be used like a condition for a route
      resolve: {
        expenses: function ($localForage, Start) {
          // before we are routed here, first this promise has to resolve
          $localForage.getItem('expenses')
          .then(function (result) {
            if (result) {
              // store the data from the local storage in the service
              Start.data.expenses = result;
            }
          });
        }
      }
    });
  // TODO: do your thing
})

// configure localForage
.config(function ($localForageProvider) {
  $localForageProvider.config({
    name: 'mway',
    storeName: 'myexpenses'
  });
});
