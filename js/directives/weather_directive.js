(function() {
    'use strict';
    
    angular.module('shop').directive('weather', function (API) {
	  return {
	    restrict: 'E',
	    templateUrl:"../views/partials/weather.html",
	    link: function (scope, element, attrs) { 
	      var vm = scope;
	      
	      var city = attrs.city;

	      var data = API.getWeather("cincinnati");

	      data.then(function(response){
	      	console.log(response);
	      	vm.data = response.data;
	      });

	    }
	  };
	});
})();