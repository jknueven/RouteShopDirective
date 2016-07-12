  'use strict';

angular.module("shop").controller("listController", function() {

	var vm = this;
	
	function getDogs(){
	var dog1 = {
		name:"St. Bernard",
		image: "http://i492.photobucket.com/albums/rr285/Dalicio/DAlicio2long099.jpg",
		descrip: "A large mountain dog, used by rescue workers to locate lost/entrenched climbers on mountains after an avalanche. Great companion, low energy, very loyal, trainable.",
		price: 300,
		id: 0, 
		category: 3, 
	};
	var dog2  = {
		name:"Retriever",
		image: "http://www.iefun.com/AE26A1A27BA864F552CA1C39FE68C_h374_w526_m2_bblack_q99_p99_cqkuBMIFI.jpg",
		descrip: "Common household dog, mostly a high energy dog that is tame around most people naturally. Extremely loyal, Trainable (with somed difficulty), and high energy.",
		price:180,
		id: 1,
		category: 2,
	}

	var dog3 = {
		name: "Greyhound",
		image: "http://nextpup.com/wp-content/uploads/greyhound-dog-breed1.jpg",
		descrip: "Traditionaly used for Racing, but they are trending more toward domestic and hunting use recently. May require help with training, but are loyal and welcoming into a more mature family.",
		price: 340,
		id: 2,
		category: 3,
	}

	var dog4 = {
		name: "Bulldog",
		image: "http://www.101dogbreeds.com/wp-content/uploads/2015/05/Victorian-Bulldog-Full-Grown.jpg",
		descrip: "Although breed to a more stout and unhealthier breed, Bulldogs are a much friendlier dog than its ancestors. They have a shorter lifespan, but make up for it in energy and loyalty. Very Trainable as well.",
		price: 200,
		id: 3,
		category: 1,
	}

	var dog5 = {
		name: "Poodle",
		image: "http://justadogg.info/wp-content/uploads/2013/07/miniaturepoodlesf51.jpg",
		descrip: "Poodles are a great choice for allergenic families, as its short hair does not generate a significant amount of dandriff. Can be energetic, but will look more for companionship with the calm and collected type. Trainable and loyal.",
		price: 250,
		id: 4,
		category: 2,
	}

	var dog6 = {
		name: "Chihuahua",
		image: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F26%2F0d%2F6443c92b4c67ae315a8bb8be16e1%2FChihuahua-AP-KIDP62-645lc061113.jpg",
		descrip: "A highly energentic dog and one that is usually groomed for urban life, Chihuahuas tend to be more of a fashionable dog than most other breeds. High attachment need and enegry make this dog very selective for families. Low trainablility.",
		price: 180,
		id: 5,
		category: 1,
	}

	vm.data = [dog1, dog2, dog3, dog4, dog5, dog6];

	return data;
	}

		 	return {
		 		getDogs:getDogs
		 	}


});