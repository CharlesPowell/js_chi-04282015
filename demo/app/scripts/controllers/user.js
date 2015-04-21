'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:UserController
 * @description
 * # UserController
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('UserController', ['$scope', '$routeParams', '$location', 'User', function ($scope, $routeParams, $location, User) {
        $scope.user = User.get({id: $routeParams.id}, function(user) {
            console.log(user);
        });

        $scope.updateUser = function() {
            User.update({id: $scope.user.id}, $scope.user, function(user) {
                $scope.user = user;
            });
        };

        $scope.deleteUser = function() {
            $scope.user.$delete({id: $scope.user.id}, function() {
                $location.url('/');
            });
        };
    }]);
