import Sum from "./modules/Sum.js";
import Avg from "./modules/Avg.js";
import { Divided, Modulus, Mul } from "./modules/Math.js";

const total = Sum(5, 6);
console.log(Avg(total, 2));

console.log(Mul(3,6));
console.log(Divided(3,6));
console.log(Modulus(3,6));