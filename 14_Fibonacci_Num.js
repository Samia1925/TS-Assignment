"use strict";
function nthFibonacci(n) {
    if (n <= 1)
        return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}
let n = parseInt(prompt("Enter n to find the nth Fibonacci number:") || "0");
console.log("The " + n + "th fibonacci number is: " + nthFibonacci(n));
//# sourceMappingURL=14_Fibonacci_Num.js.map
