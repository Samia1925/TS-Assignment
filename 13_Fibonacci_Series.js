"use strict";
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
let n = parseInt(prompt("Enter the number of Fibonacci terms:") || "0");
for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
}
//# sourceMappingURL=13_Fibonacci_Series.js.map
