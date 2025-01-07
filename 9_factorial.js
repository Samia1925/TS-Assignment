"use strict";
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let f = n * factorial(n - 1);
    return f;
}
let nom = parseInt(prompt("Enter a number:") || "0");
let factor = factorial(nom);
console.log("The factorial of " + nom + " is " + factor);
//# sourceMappingURL=9_factorial.js.map
