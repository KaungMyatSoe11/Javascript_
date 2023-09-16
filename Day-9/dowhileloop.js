const correctNum = 3;
let userGuessNum;

do {
  userGuessNum = prompt("Enter A Guess Number :"); //1,3
  if (correctNum > userGuessNum) {
    alert(`The correct is larger than ${userGuessNum}`);
  } else if (correctNum < userGuessNum) {
    alert(`The correct is smaller than ${userGuessNum}`);
  }
} while (correctNum != userGuessNum);

if (correctNum == userGuessNum) {
  alert("Your Guess Number is Correct!");
}
