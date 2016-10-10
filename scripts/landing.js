var pointsArray = document.getElementsByClassName('point');


var revealPoint = function(point) {
					
			point.style.opacity = 1;
			point.style.transform = "scaleX(1) translateY(0)";
			point.style.msTransform = "scaleX(1) translateY(0)";
			point.style.WebkitTransform = "scaleX(1) translateY(0)";
					
};

var animatePoints = function(points) {

				forEach(points, revealPoint);
				/*
					create a for-each callback function
                    that takes in a array and returns a callback 
                    to each element of that array

					function forEach(array, callBack) {
						for( i=0; i < array.length; i++) {
						callBack(array[i]);
					};

					3 points in the landing page, iterate through and run reveal point fucntion
				*/

				/*  ____ Replaced with foreach function ______
					runs revealpoint incrementing point number

					for(var i = 0; i < points.length; i ++) {
					revealPoint(i);
					}; 
				*/ 
			
};

window.onload = function(){

	var sellingPoints = document.getElementsByClassName('selling-points')[0];
	var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

	window.addEventListener('scroll', function(event) {
		if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
			animatePoints(pointsArray);
		}		
	});
}

