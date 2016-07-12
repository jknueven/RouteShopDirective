  'use strict';

angular.module("shop").controller("detailController", function() {

	var vm = this;
	var dog1 = {
		name: "Golden Retriever",
		price: 250,
		descrip: "A loyal breed of dog, the Golden Retriever lives up to its namesake and is one of the easiest to train. Qualities include: High Energy, Lovable, Family-Friendly, and Medium Maintenance."
	}

	vm.data = [dog1];

});