const fs = require("fs");

let num = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let [n] = num;

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += i;
  console.log(sum);
}
