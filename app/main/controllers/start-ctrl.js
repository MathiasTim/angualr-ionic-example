'use strict';
angular.module('main')
.controller('StartCtrl', function ($window, Start, Config) {

  // bind data from service
  this.data = Start.data;
  this.categories = Start.categories;
  this.env = Config.ENV;
  this.deviceWidth = $window.screen.width;

  console.log('Hello from your Controller: StartCtrl in module main:. This is your scope:', this);

  // use this function to add the desired amount
  this.addAmount = function (category) {
    if (!this.amount) {
      return; // leave method when amount is empty
    }

    // use a simple js array
    this.data.expenses.push(
      {
        category: category,
        amount: this.amount,
        tracked: new Date().getTime() // add a timestamp in milliseconds
      }
    );
    this.amount = null; // to clear the amount field after the add
  };

  // this method should calculate the total expeneses
  this.total = function () {
    var total = 0;
    // go through each item and add its amount to the total
    angular.forEach(this.data.expenses, function (item) {
      total +=  isNaN(item.amount) ? 0 : item.amount;
    });
    return total;
  };

  // this method searches the category by id so we can display the correct icon
  this.getCategory = function (id) {
    var category = null;
    angular.forEach(this.categories, function (item) {
      if (id === item.id) {
        category = item;
      }
    });
    return category;
  };
});
