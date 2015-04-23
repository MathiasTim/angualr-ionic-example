'use strict';
angular.module('main')
.controller('StartCtrl', function (Start, Config) {

  // bind data from service
  this.someData = Start.someData;
  this.env = Config.ENV;

  console.log('Hello from your Controller: StartCtrl in module main:. This is your scope:', this);
  // TODO: do your controller thing
});
