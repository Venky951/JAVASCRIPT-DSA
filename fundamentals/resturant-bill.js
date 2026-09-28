const fs = require("fs");

let bill = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let [item1, item2, deliveryfee] = bill;

total = item1 + item2 + deliveryfee;

console.log(total);
