const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

//Big-O = O(n) since we have a loop, the time complexity increases linearly as the num increases in value;

const isPrimeOptimal = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeOptimal(1));
console.log(isPrimeOptimal(5));
console.log(isPrimeOptimal(4));

//Big-O = O(sqrt(n));
