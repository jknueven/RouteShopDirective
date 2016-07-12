(function() {
    'use strict';
    
    angular
    .module('shop')
	.directive('dog', [function (API) {
	  return {
	    restrict: 'E',
	    templateUrl:"./views/partials/detail.html",
	    link: function (scope, element, attrs) { 
	      

	      var dog = attrs.item;

	      dog = JSON.parse(dog);

	      scope.dog = dog;

	    }
	  };
	}])
})();