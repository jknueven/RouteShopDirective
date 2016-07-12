  'use strict';

angular.module("shop").controller("catController", function() {

	var vm = this;
	var category1 = {
		name:"Dire Wolf",
	}
	var category2  = {
		name:"Lap Dog",
	}

	var category3 = {
		name: "Energetic",
	}

	vm.data = [category1, category2, category3];


});