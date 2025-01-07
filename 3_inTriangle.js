"use strict";
let a = parseFloat(prompt("Enter value for a:") || "0");
let b = parseFloat(prompt("Enter value for b:") || "0");
let c = parseFloat(prompt("Enter value for c:") || "0");
if (a + b > c && b + c > a && c + a > b) {
    console.log("The values can make a triangle");
}
else {
    console.log("Triangle is not possible");
}
//# sourceMappingURL=3_inTriangle.js.map
