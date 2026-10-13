const fs = require("fs");

function printLinearly(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  printLinearly(i + 1, n);
}

printLinearly(1, 20);
