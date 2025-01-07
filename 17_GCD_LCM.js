"use strict";
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        let temp = a % b;
        return gcd(b, temp);
    }
}
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function GCDAndLCM() {
    const a = parseInt(prompt("Enter 1st number: ") || "0");
    const b = parseInt(prompt("Enter 2nd number: ") || "0");
    if (isNaN(a) || isNaN(b)) {
        console.error("Invalid input. Please enter numeric values.");
        return;
    }
    const gcdResult = gcd(a, b);
    const lcmResult = lcm(a, b);
    console.log("GCD: " + gcdResult);
    console.log("LCM: " + lcmResult);
}
GCDAndLCM();
//# sourceMappingURL=17_GCD_LCM.js.map
