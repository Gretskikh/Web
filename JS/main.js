// var counter = (function(){
// 	var count = 0;
// 	return function(num){
// 		count = num !== undefined ? num : count;
// 		return count++;
// 	}
// }());

// console.log(counter());
// console.log(counter());
// console.log(counter(50));
// console.log(counter());
// console.log(counter());

// var calcul = function(n){
// 	if(n==0) throw new Refчя смтьerenceError("Infinity");
// 	return 10/n;
// };

// try{
// 	calcul(0);

// }
// catch(e){
//  throw e;
// }

// "use strict";

// var person = {б
// 	name: 'John',
// 	_age: 20,
// 	get age(){
// 		return this._age;
// 	},
// 	set age(value){
// 		this._age = value<0 ? 0 : value > 122 ?122 : value;
// 	}
	
// };

// // console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// // console.log(Object.getOwnPropertyDescriptor(person, 'age'));
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));

// person.name = "Nik";

// Object.defineProperty(person, "name", {
// 	value: "John",
// 	writable: false,
// 	enumerable: true,
// 	configurable: false
// });

// person.name = "Nik";
// console.log(person.name);
// // console.log(Object.getOwnPropertyDescriptor(person, 'male'));

// Object.defineProperty(person, "gender", {
// 	value: "male",
// 	writable: true,
// 	enumerable: false,
// 	configurable: false
// });

// console.log(person.gender);

// person.gender = "female";

// console.log(person.gender);

// for(property in person){
// 	console.log(property);
// }

// console.log(Object.keys(person));

// var o = {};
// Object.defineProperties(o, {
// 	x: {
// 		value: 10,
// 		writable: false
// 	},
// 	y: {
// 		value: 20,
// 		writable: false
// 	},
// 	r: {
// 		get: function() {
// 			return (this.x * this.y);
// 		}
// 	}
// });

// o.x = 35;
// console.log(o.x);
// console.log(o.y);
// console.log(o.r);
// var a = {x:15};
// var b = {x:25};
// a=b;
// a.x=10;
// console.log(a.x);
// console.log(b.x);

// var Person, person, anotherPerson;

// Person = function(name) {
// 	this.name = name;
// };

// person = new Person("Jack");
// console.log(person.name);

// anotherPerson = new Person("Bruce");
// console.log(anotherPerson.name);

var Track = function(params) {
	this.name = params.name;
	this.url = params.url;

	this.playTrack = function() {
		console.log("We started playing", this.name);
	}
};

// Track.prototype.playTrack = function() {
// 		console.log("We started playing", this.name);
// 	};



// YoutubeTrack.prototype = Object.create(Tr2ack.prototype);

// YoutubeTrack.prototype.constructor=YoutubeTrack;

var track01 = new Track({
	name: 'track01',
	url: 'track01.mp3'
});

var track02 = new Track({
	name: 'track02',
	url: 'track02.mp3'
});

// var youtubetrack01 = new YoutubeTrack({
// 	name: 'youtubetrack01',
// 	url: 'youtubetrack01.mp3',
// 	image: 'youtubetrack01.jpg'
// });

// var youtubetrack02 = new YoutubeTrack({
// 	name: 'youtubetrack02',
// 	url: 'youtubetrack02.mp3',
// 	image: 'youtubetrack02.jpg'
// });

// console.log(track01);
// console.log(track02);

// console.log(youtubetrack01);
// console.log(youtubetrack02);

