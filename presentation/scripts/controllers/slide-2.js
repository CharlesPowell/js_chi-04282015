'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide2
 * @description
 * # Slide 2 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide2Controller', ['$scope', '$http', function($scope, $http) {
        var pieces = [
            {id: 0, text: 'Resources'},
            {id: 1, text: 'Services'},
            {id: 2, text: 'Templates'},
            {id: 3, text: 'Controllers'},
            {id: 4, text: 'Routing'}
        ];
        $scope.pieces = [{id: 5, text: 'App/Module'}];
        $scope.addPiece = function() {
            if(pieces.length > 0) {
                $scope.pieces.push(pieces.pop());
            }
        };
    }]);
