(function() {
'use strict';

	angular
	.module('shop', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/404");

	  	$stateProvider
	  	.state('home', {
	  			url: '/',
	  			views: {
      				'main': {
		        	templateUrl: '../views/home.html',
		        	controller: 'homeController',
		        	controllerAs: 'home',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	    	})
	  	.state('category', {
	  		url: "/category", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/cat.html',
		        	controller: 'catController',
		        	controllerAs: 'category',
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	  		})
	  	.state('list', {
	  		url: "/lists", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/list.html',
		        	controller: 'listController',
		        	controllerAs: 'list'
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		     		},
		  		},
	  		})
	  	.state('detail', {
	  		url: "/details", 
	  		views: {
      				'main': {
		        	templateUrl: '../views/detail.html',
		        	controller: 'detailController',
		        	controllerAs: 'detail'
		      		},
		      		'nav': {
		       		templateUrl: '../views/partials/nav.html',
		      		},
		  		},
	  		});
	});
})();