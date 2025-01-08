"use strict";
let input = parseInt(prompt("Enter the value of n: ") || "0");
function sumNum(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        let temp = i * i;
        sum += temp;
    }
    return sum;
}
let result = sumNum(input);
console.log("The result of series is: " + result);
//# sourceMappingURL=18_series2.js.map
