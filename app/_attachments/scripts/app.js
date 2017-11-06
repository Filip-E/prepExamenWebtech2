'use strict'

angular.module('prepApp', ['ngRoute'])

.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'assets/home.html',
                controller: 'homeCtrl'
            })
            .when('/newPerson.html', {
                templateUrl: 'assets/newPerson.html',
                controller: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    })
    .controller('homeCtrl', function ($scope,$window, personSrv) {
    	$('#newPerson').on('click',function(){
    		$window.location.href = '/newPerson.html';
    	};
    	personSrv.getPersons().then(function(data){
    		console.log('resolve from ctrl: ' + data.toString());
    		$scope.persons = data;
    	},function(err){
    		console.log('ctrl promise error: ' + err);
    	});
    	
    })
    .service('personSrv',function($http, $q){
    	var ALL_DOCS = '../../_all_docs?include_docs=true';
    	this.getPersons = function(){
    		var q = $q.defer();

        	$http.get(ALL_DOCS)
        		.then(function(data){
        			var arr = data.data.rows;
        			for(var i = 0; i < arr.length; i++){
        				if(arr[i].id == "_design/app"){
        					arr.splice(i,1);
        				}
        			};
        			q.resolve(arr);
        		},function(err){
        			q.reject(err);
        		});
        	return q.promise;
    	};
    });