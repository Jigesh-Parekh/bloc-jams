function forEach(array, callBack) {

	for( i=0; i < array.length; i++) {
		callBack(array[i]);
	};

};
/* create a for-each callback function
   that takes in a array and returns a callback 
   to each element of that array */