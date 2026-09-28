const fs = require("fs");

let unit = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

if (unit < 0) {
  console.log("Invalid Input");
} else if (unit <= 100) {
  let bill = unit * 2;
  console.log(bill);
} else if (unit <= 200) {
  let bill = 100 * 2 + (unit - 100) * 3;
  console.log(bill);
} else if (unit > 200) {
  let bill = 100 * 2 + 100 * 3 + (unit - 200) * 5;
  console.log(bill);
}
