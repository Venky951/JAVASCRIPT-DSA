let fs = require("fs");
let name = "venky";
function printName(i, n) {
  if (i > n) {
    return;
  }
  console.log(name);
  printName(i + 1, n);
}
printName(1, 5);
