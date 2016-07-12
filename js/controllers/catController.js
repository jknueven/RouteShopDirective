  'use strict';

angular.module("shop").controller("catController", function() {

	var vm = this;
	var category1 = {
		name:"Small",
		id: 1,
	}
	var category2  = {
		name:"Medium",
		id: 2,
	}

	var category3 = {
		name: "Large",
		id: 3,
	}

	vm.data = [category1, category2, category3];


});