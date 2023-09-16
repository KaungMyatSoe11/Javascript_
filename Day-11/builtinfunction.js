// const p = Math.pow(2, 5);

// console.log(Math.ceil(3.5));
// console.log(Math.PI);
// console.log(Math.sqrt(5));
// console.log(Math.max(3, 4, 39, 89));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const foods = ["Burger", "Pizza", "fried Chicken", "ice-cream"];
console.log(fruits.join(" "));
fruits.push("Durian");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("New Banana");
console.log(fruits);

const newArray = fruits.concat(foods);
console.log(newArray);

fruits.splice(2,1)
console.log(fruits);
