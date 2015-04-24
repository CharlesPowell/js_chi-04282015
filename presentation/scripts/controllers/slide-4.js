'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide4
 * @description
 * # Slide 4 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide4Controller', ['$scope', '$controller', function($scope, $controller) {
        $controller('ListSlideController', {$scope: $scope});

        $scope.listItemsCache = [
            {id: 0, text: "Other stuff too..."},
            {id: 1, text: "Tells your app how to make the display do stuff (Controller)"},
            {id: 2, text: "Tells your app what to display once it gets there (Template)"}
        ];
        $scope.listItems = [{id: 3, text: "Tells your app where to go"}];
    }]);
