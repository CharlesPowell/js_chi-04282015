'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide3
 * @description
 * # Slide 3 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide3Controller', ['$scope', function($scope) {
        var reasons = [
            {id: 0, text: "Our major DevOps hurdle would exist even with Prerender.io"},
            {id: 1, text: "Don't have the manpower to maintain our own Prerender.io server"}
        ];
        $scope.reasons = [{id: 2, text: "Cost (we have a lot of pages)"}];
        $scope.addReason = function() {
            if(reasons.length > 0) {
                $scope.reasons.push(reasons.pop());
            }
        };
    }]);
