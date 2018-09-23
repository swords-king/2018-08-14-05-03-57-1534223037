module.exports = function main() {
  // Write your code here
  var sum = 0;
  var str = arguments[0]
  for (var x of str){
	  var a = parseInt(x);
	  sum += a;
  }
  return sum;
};
