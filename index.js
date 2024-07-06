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

window.addEventListener("load", () => {
  let form = document.getElementById("form");
  form.addEventListener("submit", SubmitGuess);
});
function SubmitGuess(event) {
  event.preventDefault();
  luckyNum = Math.floor(Math.random() * 11);

  // let guess = new FormData(form);

  // const data = Object.fromEntries(FormData)
  // console.log(guess);

  let guess = form.guess.value;

  if (guess == luckyNum){
    alert("You won");
  }else{
    alert("Oooops, You loss. The lucky number is " + luckyNum)
  }
}

// const guesbtn = document.getElementById("guesbtn");
// guesbtn.addEventListener((event) => {
//   alert("seen");
// });

// const game = document.getElementsByClassName("game");
// game.style.display = "none";
