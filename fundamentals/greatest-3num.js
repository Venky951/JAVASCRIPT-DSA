const fs = require("fs");

let num = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let [a, b, c] = num;

if (a >= b && a >= c) {
  console.log("Largest number is: ", a);
} else if (b >= a && b >= c) {
  console.log("Largest number is: ", b);
} else {
  console.log("Largest number is: ", c);
}
