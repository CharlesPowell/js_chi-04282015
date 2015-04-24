'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide8
 * @description
 * # Slide 8 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide8Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Is an instantiated service, not a singleton", subItem: {text: "Must be new'ed in user code"}},
            {id: 1, text: "Wrapper for $http", subItem: {text: "Contains $get, $save and $delete object functions and query class function"}}
        ];
        $scope.listItems = [{id: 2, text: "Used to connect to RESTful APIs"}];
    }]);
