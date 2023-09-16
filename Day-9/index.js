const correctNum = Math.round(Math.random() * 10000); //0.833444=>8.3344
let userGuessNum = prompt("Enter A Guess Number :");

while (correctNum != userGuessNum) {
  if (correctNum > userGuessNum) {
    alert(`The correct is larger than ${userGuessNum}`);
  } else {
    alert(`The correct is smaller than ${userGuessNum}`);
  }

  userGuessNum = prompt("Enter A Guess Number :");
}

if (correctNum == userGuessNum) {
  alert("Your Guess Number is Correct!");
}
