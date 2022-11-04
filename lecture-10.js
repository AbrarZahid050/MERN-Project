const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

//Big-O = O(log(n)) cuz the input decreases by half after every iteration of the loop.

const isPowerOfTwoOptimize = (num) => {
  if (num < 1) {
    return false;
  }
  if ((num & (num - 1)) === 0) {
    return true;
  }
  return false;
};

console.log(isPowerOfTwoOptimize(1));
console.log(isPowerOfTwoOptimize(2));
console.log(isPowerOfTwoOptimize(5));

//Big-O = O(1) contant cuz there is no loop in the optimized version.
