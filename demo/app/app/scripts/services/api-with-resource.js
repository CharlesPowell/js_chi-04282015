'use strict';

/**
 * @ngdoc function
 * @name testApp.service:APIWithResource
 * @description
 * # APIWithResource
 * Service of the testApp
 */
angular.module('testApp')
    .factory('APIWithResource', ['$resource', function ($resource) {
        return $resource('http:localhost:3000/');
    }]);
