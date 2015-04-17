'use strict';

/**
 * @ngdoc function
 * @name testApp.service:Users
 * @description
 * # Users Service
 * Service of the testApp
 */
angular.module('testApp')
    .factory('Users', ['$resource', function ($resource) {
        return $resource('http:localhost:3000/users');
    }]);
