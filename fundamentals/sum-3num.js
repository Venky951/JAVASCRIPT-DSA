const fs = require("fs");

let num = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let [num1, num2, num3] = num;

if (
  num1 <= 100 &&
  num1 >= 0 &&
  num2 <= 100 &&
  num2 >= 0 &&
  num3 <= 100 &&
  num3 >= 0
) {
  let avsum = (num1 + num2 + num3) / 3;
  if (avsum >= 40) {
    console.log("pass");
  } else {
    console.log("fail");
  }
} else {
  console.log("Invalid input");
}
