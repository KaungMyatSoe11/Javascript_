const correctPasscode = "293989";
let userPasscode = prompt("Enter Your Passcode :");

while (userPasscode != correctPasscode) {
  alert(`Incorrect Passcode ${userPasscode.length}`);
  // console.log(userPasscode.length);
if(userPasscode.length>6){
  alert("Passcode should be mix 6. try again!")
}else if(userPasscode.length<6){
  alert("Passcode should be min 6. try again!")
}

  userPasscode = prompt("Enter Your Passcode :");
  
}

if (userPasscode == correctPasscode) {
  alert("Correct Passcode");
}
