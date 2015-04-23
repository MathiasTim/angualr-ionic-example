'use strict';
angular.module('main')
.service('Start', function () {
  console.log('Hello from your Service: Start in module main');

  this.data = {
    expenses: []
  };
});
