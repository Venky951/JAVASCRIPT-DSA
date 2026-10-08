const fs = require("fs");

let n = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let arr = [];

for (let i = 0; i < n.length; i++) {
  arr.push(n[i]);
}

let hash = new Array(13).fill(0);

for (let i = 0; i < arr.length; i++) {
  hash[arr[i]] += 1;
}
console.log(hash);
