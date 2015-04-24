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
            {id: 0, text: "Tells your page what to do"},
            {id: 1, text: "Tells your page how to act"}
        ];
        $scope.listItems = [{id: 2, text: "Here's the page's JavaScript"}];
    }]);
