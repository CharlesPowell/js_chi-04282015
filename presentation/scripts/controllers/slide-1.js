'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide1
 * @description
 * # Slide 1 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide1Controller', ['$scope', '$http', function($scope, $http) {
        var reasons = [
            {id: 0, text: '42'},
            {id: 1, text: 'Because its easy until it\'s not'},
            {id: 2, text: 'Because reading a tutorial can only get you so far'}
        ];
        $scope.reasons = [{id: 3, text: 'Because AngularJS is not the only framework around'}];
        $scope.addPiece = function() {
            if(reasons.length > 0) {
                $scope.reasons.push(reasons.pop());
            }
        };
    }]);
