const recursiveFibSeq = (num) => {
  if (num < 2) {
    return num;
  }
  return recursiveFibSeq(num - 1) + recursiveFibSeq(num - 2);
};

console.log(recursiveFibSeq(1));
console.log(recursiveFibSeq(2));
console.log(recursiveFibSeq(6));

// O(2^n) => not a good solution to Fib sequence.
