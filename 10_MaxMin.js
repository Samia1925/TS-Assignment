"use strict";
const input = prompt("Enter a list of numbers separated by commas:");
if (input) {
    const array = input.split(",").map(num => parseFloat(num.trim()));
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);
    console.log("Minimum Element is: " + minValue);
    console.log("Maximum Element is: " + maxValue);
}
else {
    console.error("No input provided.");
}
//# sourceMappingURL=10_MaxMin.js.map
