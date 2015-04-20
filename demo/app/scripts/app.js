'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
