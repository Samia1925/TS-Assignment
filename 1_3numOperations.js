"use strict";
function calculateEquation() {
    const a = parseFloat(prompt("Enter value for a:") || "0");
    const b = parseFloat(prompt("Enter value for b:") || "0");
    const c = parseFloat(prompt("Enter value for c:") || "0");
    if (b - c === 0) {
        console.error("Error: Division by zero.");
    }
    else {
        const x = a / (b - c);
        console.log("The value of x is " + x);
    }
}
calculateEquation();
//# sourceMappingURL=1_3numOperation.js.map
