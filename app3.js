const fs = require("fs");

const content = fs.readFileSync("README.md", "utf-8");

const words = content.split(" ");
const reactWordCount = content.match(/react/gi ?? []).length;

console.log("Palabras: ", words.length);
console.log("Palabras React: ", reactWordCount);
