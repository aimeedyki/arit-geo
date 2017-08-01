const assert = require('chai').assert;
const myApp = require('../src/Aritgeo.js');

describe("Arithmetic or Geometric", function(){

	describe("handle invalid input", function(){
		it ("should return error for ['m','n',2]}", function(){
			assert.equal('Array of numbers is required', myApp.aritGeo(['m','n',2]));
		});
		it ("should return error for '1234']}", function(){
			assert.equal('Array of numbers is required', myApp.aritGeo('1234'));
		});
		it ("should return error for [' ', 'tyu']", function(){
			assert.equal('Array of numbers is required', myApp.aritGeo([" ", "tyu"]));
		});
	})

	describe("handle neither Arithmetic nor Geometric progression", function(){
		it ("should return -1 for [1,2,5,6,9]", function(){
			assert.equal('-1', myApp.aritGeo([1,2,5,6,9]));
		});
		it ("should return -1 for [2,4,8,16,17,34]", function(){
			assert.equal('-1', myApp.aritGeo([2,4,8,16,17,34]));
		});
	})

	describe("handle Arithmetic progression", function(){
		it ("should return Arithmetic for [3,6,9,12,15]}", function(){
			assert.equal('Arithmetic', myApp.aritGeo( [3,6,9,12,15]) );
		});
		it ("should return Arithmetic for [5,10,15,20]}", function(){
			assert.equal('Arithmetic', myApp.aritGeo( [5,10,15,20]));
		});
	})

	describe("handle Geometric progression", function(){
		it ("should return Geometric for [6,12,24,48,96]}", function(){
			assert.equal('Geometric', myApp.aritGeo([6,12,24,48,96]));
		});
		it ("should return Geometric for [3,9,27]}", function(){
			assert.equal('Geometric', myApp.aritGeo([3,9,27]));
		});
	})

	describe("handle empty Array", function(){
		it ("should return 0 for []}", function(){
			assert.equal( '0', myApp.aritGeo([]));
		});
	})

})