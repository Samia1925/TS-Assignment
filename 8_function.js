"use strict";
let x = parseFloat(prompt("Enter the value of x: ") || "0");
let y;
if (x === 0) {
    y = 1;
}
else if (x >= 0) {
    y = x * x;
}
else {
    y = 0;
}
console.log("The value of y is: " + y);
//# sourceMappingURL=8_function.js.map
