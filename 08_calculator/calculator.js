const add = function(a,b) {
	return a + b ;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let sumNumber = 0
	for(let i =  0; i < arr.length; i ++) {
    sumNumber += arr[i];
  }
  return sumNumber;
};

const multiply = function(arr) {
  let mult = 1;
  for(let i = 0; i < arr.length; i++){
    mult *= arr[i];
  }
  return mult;
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(n) {
  let f = [];
	if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
