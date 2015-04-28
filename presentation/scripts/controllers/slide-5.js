'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide5
 * @description
 * # Slide 5 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide5Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Interacts with its template(s) through the $scope object"},
            {id: 1, text: "Can interact with Services, Values, Constants and Filters"}
        ];
        $scope.listItems = [{id: 2, text: "The page's codebase"}];
    }]);
