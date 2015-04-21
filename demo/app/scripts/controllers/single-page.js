'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:SinglePageController
 * @description
 * # SinglePageController
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('SinglePageController', ['$scope', 'Users', 'User', function ($scope, Users, User) {
        function refreshUsers() {
            Users.get().success(function(users) {
                $scope.users = users;
            }).error(function() {
                $scope.error = 'Unable to get the Users';
            });
        }

        $scope.loadUser = function(user) {
            $scope.user = user;
        };

        $scope.cancel = function() {
            $scope.user = undefined;
        };

        $scope.updateUser = function() {
            User.update({id: $scope.user.id}, $scope.user, function() {
                $scope.cancel();
            });
        };

        $scope.deleteUser = function() {
            $scope.user.$delete({id: $scope.user.id}, function() {
                $scope.cancel();
                refreshUsers();
            });
        };

        refreshUsers();
    }]);
