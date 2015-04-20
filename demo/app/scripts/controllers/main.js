'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainController
 * @description
 * # MainController
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MainController', ['$scope', 'Users', function ($scope, Users) {
        Users.get().success(function(users) {
            $scope.users = users;
        }).error(function() {
            $scope.error = 'Unable to get the Users';
        });
  }]);
