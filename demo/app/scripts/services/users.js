'use strict';

/**
 * @ngdoc function
 * @name testApp.service:Users
 * @description
 * # Users Service
 * Service of the testApp
 */
angular.module('testApp')
    .factory('Users', ['$http', 'User', function ($http, User) {
        var users = {};

        $http({
            url: 'http://localhost:3000/users',
            method: 'GET',
            transformResponse: function(data) {
                return angular.isArray(data) ? data.map(function(datum) {
                    return new User(datum);
                }) : data;
            }
        });

        users.get = function() {
            return $http.get('http://localhost:3000/users');
        };

        return users;
    }]);
