function calcFizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
calcFizzBuzz(15);


// Output:
// FizBuzz;
// 1;
// 2;
// Fizz;
// 4;
// Buzz;
// Fizz;
// 7;
// 8;
// Fizz;
// Buzz;
// 11;
// Fizz;
// 13;
// 14;
// FizBuzz;
