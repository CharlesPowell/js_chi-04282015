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
        var problems = [
            {id: 0, text: 'Nothing should be rendered until all of this is complete'},
            {id: 1, text: 'Dynamic Data needs to be loaded'},
            {id: 2, text: 'JavaScript needs to be parsed'}
        ];
        $scope.problems = [{id: 3, text: 'SPAs need to be run'}];
        $scope.curlProblems = false;
        $scope.crawledHTML = '';
        $scope.addProblem = function() {
            if(problems.length > 0) {
                $scope.problems.push(problems.pop());
            }
            else {
                $scope.curlProblems = true;
            }
        };

        $scope.testPlainSyncRequest = function() {
            $http.get('http://seo.angular.local/sync')
                .success(function(data) {
                    $scope.crawledHTML = data;
                });
        };
    }]);
