const foo = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(foo(5));
console.log(foo(1));

//Big-O = O(n) cuz there is a loop;
