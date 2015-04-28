'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide11Config
 * @description
 * # Slide 11 Config Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide11ConfigController', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Cannot use Services; only Providers, Values and Constants"}
        ];
        $scope.listItems = [{id: 1, text: "Place where the app is setup before executing"}];
    }]);
