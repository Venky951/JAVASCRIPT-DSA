const fs = require("fs");

function printbyBacktrack(i, n) {
  if (i > n) {
    return;
  }
  printbyBacktrack(i + 1, n);
  console.log(i);
}
printbyBacktrack(1, 20);
