'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide5
 * @description
 * # Slide 5 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide5Controller', ['$scope', '$http', function($scope, $http) {
        // 1 === server-side implementation
        // 2 === PhantomJS crawler
        // 3 === PhantomJS proxy
        var maxPartialIndex = 3;
        $scope.showPartial = 1;
        $scope.switchPartial = function($event) {
            if($event.ctrlKey) { // Move back
                if ($scope.showPartial > 1) {
                    $scope.showPartial--;
                }
            }
            else { // Move forward
                if($scope.showPartial < maxPartialIndex) {
                    $scope.showPartial++;
                }
            }
        };
    }]);
