const isRaining=true
let age="28"
let mark=190
let userInput="KMS"
let toCheck="KMS"


console.log("Before check");
if(isRaining != true ){//false == true
    console.log("condition is true");
}

console.log("finished check");
if(age!=="28"){ //28!==29
    console.log("checked");
}

if(mark>=40 && mark<80){
    console.log("you pass");
}else if(mark>=80 && mark <=100){
    console.log("you D");
}
else if(mark>=0 && mark <40){
    console.log("fail");
}
else{
    console.log("your mark is invalid.");
}

if(userInput==toCheck || userInput==toCheck.toLowerCase()){
   console.log(`Your name's ${userInput}`);
}