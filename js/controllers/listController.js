  'use strict';

angular.module("shop").controller("listController", function() {

	var vm = this;
	var dog1 = {
		name:"St. Bernard",
	}
	var dog2  = {
		name:"Retriever",
	}

	var dog3 = {
		name: "Greyhound",
	}

	var dog4 = {
		name: "Bulldog",
	}

	var dog5 = {
		name: "Poodle",
	}

	vm.data = [dog1, dog2, dog3, dog4, dog5];

});