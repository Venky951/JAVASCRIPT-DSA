const fs = require("fs");

let num = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let [A] = num;
if (A >= 90) {
  console.log("Grade: A");
} else if (A >= 80 && A <= 89) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}
