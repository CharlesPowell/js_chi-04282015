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
            {id: 0, text: "Provides methods and properties for configuring the created service", subItem: {text: "$routeProvider.when(...)"}},
            {id: 1, text: "Is typically named after the service with Provider tacked on to the end", subItem: {text: "$routeProvider, $logProvider, ..."}}
        ];
        $scope.listItems = [{id: 2, text: "Allows you to configure the 'Real workhorse of AngularJS apps'"}];
    }]);
