'use strict';
angular.module('main')
.service('Start', function () {
  console.log('Hello from your Service: Start in module main');

  this.data = {
    expenses: []
  };
  this.categories = [
    {
      id: 0,
      name: 'Food',
      icon: 'ion-pizza'
    },
    {
      id: 1,
      name: 'Drinks',
      icon: 'ion-beer'
    },
    {
      id: 2,
      name: 'Car',
      icon: 'ion-model-s'
    },
    {
      id: 3,
      name: 'Clothes',
      icon: 'ion-tshirt'
    },
    {
      id: 4,
      name: 'Sport',
      icon: 'ion-ios-basketball'
    }
  ];
});
