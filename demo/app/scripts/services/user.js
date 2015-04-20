'use strict';

/**
 * @ngdoc function
 * @name testApp.service:User
 * @description
 * # User Service
 * Service of the testApp
 */
angular.module('testApp')
    .factory('User', ['$resource', function ($resource) {
        return $resource('http://localhost:3000/users/:id');
    }]);
