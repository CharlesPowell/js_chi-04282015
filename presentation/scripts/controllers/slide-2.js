'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide2
 * @description
 * # Slide 2 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide2Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: 'Dependency Injection'},
            {id: 1, text: 'Providers'},
            {id: 2, text: 'Services'},
            {id: 3, text: 'Templates'},
            {id: 4, text: 'Controllers'},
            {id: 5, text: 'Routing'}
        ];
        $scope.listItems = [{id: 6, text: 'App/Module'}];
    }]);
