const fs = require("fs");

function printReverse(i, n) {
  if (i < n) {
    return;
  }
  console.log(i);
  printReverse(i - 1, n);
}
printReverse(20, 1);
