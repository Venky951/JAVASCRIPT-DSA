const fs = require("fs");

let s = fs.readFileSync(0, "utf8").trim();
let str = [];
for (let i = 0; i < s.length; i++) {
  str.push(s[i]);
}

let hash = new Array(26).fill(0);

for (let i = 0; i < str.length; i++) {
  hash[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
}
console.log(hash);
