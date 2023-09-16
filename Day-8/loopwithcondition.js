let total = 0;

// for (let n = 1; n <= 10; n++) {
//   if (n % 2 !== 0) {
//     total = total + n;
//   }
// }
for (let n = 1; n <= 10; n++) {
  if (n % 3 == 0) {
    total = total + n;
  }
}

console.log(total);