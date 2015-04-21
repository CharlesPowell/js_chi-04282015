'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:UserController
 * @description
 * # UserController
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('UserController', ['$scope', '$routeParams', '$location', 'UserCollection', 'User',
        function ($scope, $routeParams, $location, UserCollection, User) {
            $scope.user = UserCollection.getUser($routeParams.id);
            if(angular.isUndefined($scope.user)) {
                $scope.user = User.get({ id: $routeParams.id });
            }

            $scope.cancel = function() {
                $location.url('/');
            };

            $scope.updateUser = function() {
                User.update({id: $scope.user.id}, $scope.user, function() {
                    $scope.cancel();
                });
            };

            $scope.deleteUser = function() {
                $scope.user.$delete({id: $scope.user.id}, function() {
                    $scope.cancel();
                });
            };
        }
    ]);