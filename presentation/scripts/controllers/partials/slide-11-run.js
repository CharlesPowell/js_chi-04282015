'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide11Run
 * @description
 * # Slide 11 Run Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide11RunController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Cannot use Providers; only Services, Values, Constants and Filters"}
        ];
        $scope.listItems = [{id: 1, text: "Place for the app's startup code"}];
    }]);
