'use strict'

angular.module('prepApp', ['ngRoute'])

.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'assets/home.html',
                controller: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .controller('homeCtrl', function ($scope, addressServ) {
    	$scope.names = 
    	[{
    			'Name' : 'Filip',
    			'Country' : 'Belgium'
    				
    	},{
    		'Name' : 'Fili',
			'Country' : 'Belgiu'
    	}];
    })
    .service('addressServ',function($http){
    	
    });