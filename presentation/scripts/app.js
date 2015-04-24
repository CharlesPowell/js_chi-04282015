'use strict';

angular
    .module('angular1xApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'hljs'
    ])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/0'
            })
            .when('/0', {
                templateUrl: 'views/slide-0.html'
            })
            .when('/1', {
                templateUrl: 'views/slide-1.html',
                controller: 'Slide1Controller'
            })
            .when('/2', {
                templateUrl: 'views/slide-2.html',
                controller: 'Slide2Controller'
            })
            .when('/3', {
                templateUrl: 'views/slide-3.html',
                controller: 'Slide3Controller'
            })
            .when('/4', {
                templateUrl: 'views/slide-4.html',
                controller: 'Slide4Controller'
            })
            .when('/5', {
                templateUrl: 'views/slide-5.html',
                controller: 'Slide5Controller'
            })
            .when('/6', {
                templateUrl: 'views/slide-6.html',
                controller: 'Slide6Controller'
            })
            .when('/7', {
                templateUrl: 'views/slide-7.html',
                controller: 'Slide7Controller'
            })
            .when('/8', {
                templateUrl: 'views/slide-8.html',
                controller: 'Slide8Controller'
            })
            .when('/9', {
                templateUrl: 'views/slide-9.html',
                controller: 'Slide9Controller'
            })
            .when('/10', {
                templateUrl: 'views/slide-10.html'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.hashPrefix('!').html5Mode(true);
    }]);
