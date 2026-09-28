const fs = require("fs");

let num = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let [n] = num;

sum = 0;
let digit;

for (let i = 1; i <= n; i++) {
  digit = n % 10;
  sum += digit;
  n = Math.floor(n / 10);
}
console.log(sum);
