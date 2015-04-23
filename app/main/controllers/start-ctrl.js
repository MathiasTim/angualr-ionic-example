'use strict';
angular.module('main')
.controller('StartCtrl', function (Start, Config) {

  // bind data from service
  this.data = Start.data;
  this.env = Config.ENV;

  console.log('Hello from your Controller: StartCtrl in module main:. This is your scope:', this);

  // use this function to add the desired amount
  this.addAmount = function () {
    if (!this.amount) {
      return; // leave method when amount is empty
    }

    // use a simple js array
    this.data.expenses.push(
      {
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
});
