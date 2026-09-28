const fs = require("fs");

let n = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 0; j < n - i + 1; j++) {
    row += "* ";
  }
  console.log(row);
}
