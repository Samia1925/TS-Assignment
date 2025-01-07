"use strict";
let a = parseInt(prompt("Value of a: ") || "0");
let b = parseInt(prompt("Value of b: ") || "0");
let c = parseInt(prompt("Value of c: ") || "0");
let x;
let temp;
if (a === 0 && b === 0 && c === 0) {
    console.log("No Solution");
}
else if (((b * b) - 4 * a * c) <= 0) {
    console.log("Roots are imaginary");
}
else if (a === 0) {
    x = -c / b;
    console.log("The value is " + x);
}
else if (b === 0) {
    temp = -c / a;
    x = Math.sqrt(temp);
    console.log("The value is " + x);
}
else {
    let d = b * b - 4 * a * c;
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("Roots are: " + root1 + " and " + root2);
}
//# sourceMappingURL=11_Quad_Eqn.js.map
