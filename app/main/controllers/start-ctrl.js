'use strict';
angular.module('main')
.controller('StartCtrl', function (Start, Config) {

  // bind data from service
  this.data = Start.data;
  this.env = Config.ENV;

  console.log('Hello from your Controller: StartCtrl in module main:. This is your scope:', this);

  this.addAmount = function () {
    this.data.expenses.push(
      {
        amount: this.amount,
        tracked: new Date().getTime()
      }
    );
    this.amount = '';
  };

  this.total = function () {
    var total = 0;
    angular.forEach(this.data.expenses, function (item) {
      total += item.amount;
    });
    return total;
  };
});
