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
        var parts = [
            {id: 0, text: "angular.module('demoApp', [...])"},
            {id: 1, text: "angular.bootstrap (manual bootstrapping)", subItem: {text: "angular.bootstrap(any, ['demoApp'])"} },
            {id: 2, text: "ng-app directive (auto-bootstrapping)", subItem: {text: "<any ng-app='demoApp'>...</any>"} }
        ];
        $scope.parts = [{id: 3, text: "Bootstrapping (Auto vs. Manual)"}];
        $scope.addParts = function() {
            if(parts.length > 0) {
                $scope.parts.push(parts.pop());
            }
        };
    }]);
