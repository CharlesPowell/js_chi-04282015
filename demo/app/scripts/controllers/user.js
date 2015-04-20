'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:UserController
 * @description
 * # UserController
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('UserController', ['$scope', '$routeParams', 'User', function ($scope, $routeParams, User) {
        $scope.user = User.get({id: $routeParams.id}, function(user) {
            console.log(user);
        });

        $scope.updateUser = function() {
            $scope.user.$put();
        };

        $scope.deleteUser = function() {

        };
    }]);
