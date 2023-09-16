let oddCount = 0;
let stopNumber;
for (let i = 1; i < 50; i++) {
  if (i % 2 != 0) {
    console.log(i);
    oddCount++;
  }
  if (oddCount == 30) {
    stopNumber = i;
    break;
  }
}

console.log(`Odd Stop Number is ${stopNumber}`);
