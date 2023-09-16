// const laptop=["lenovo","hp","dell","msi","rog","asus","acer"]
const marks = [60, 30, 80, 76, 70, 70];
let totalMarks = 0;
let isPassed = true;
for (const mark of marks) {
  if (mark >= 0 && mark < 40) {
    isPassed = false;
  }
  totalMarks += mark; //totalMarks = totalMarks + marks[key]
}

if(isPassed){
    console.log("You Pass!");
}else{
    console.log("Sorry, you Fail!.");
}
console.log(totalMarks);

