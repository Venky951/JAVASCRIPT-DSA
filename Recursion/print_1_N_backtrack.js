const fs = require("fs");

function printbyBacktrack(i, n) {
  if (i < 1) {
    return;
  }
  printbyBacktrack(i - 1, n);
  console.log(i);
}
printbyBacktrack(20, 20);
