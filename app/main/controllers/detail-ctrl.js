'use strict';
angular.module('main')
.controller('DetailCtrl', function ($scope, $stateParams, Start) {
  this.data = {};

  this.getOne = function (id) {
    var that = this;
    angular.forEach(Start.data.expenses, function (item) {
      if (item.tracked === parseInt(id, 10)) {
        that.data = item;
      }
    });
  };

  var that = this;
  $scope.$on('$ionicView.beforeEnter', function () {
    that.getOne($stateParams.id);
  });
});
