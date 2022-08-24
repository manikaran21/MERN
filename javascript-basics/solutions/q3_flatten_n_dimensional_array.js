/* Write a Program to Flatten a given n-dimensional array */

const flatten = (flat) => {
	// Write your code here
	var merged = [].concat.apply([], flat);
	console.log(merged);

};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
