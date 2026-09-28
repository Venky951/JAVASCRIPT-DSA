const fs = require("fs");

let n = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

for (let i = 0; i <= n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
