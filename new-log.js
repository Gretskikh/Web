var counter = (function(){
	var count = 0;
	return function(num){
		count = num !== undefined ? num : count;
		return count++;
	}
}());

console.log(counter());
console.log(counter());
console.log(counter(50));
// console.log(counter());
// console.log(counter());