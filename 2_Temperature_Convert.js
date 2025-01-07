"use strict";
let c1 = parseFloat(prompt("Enter value of Celcius:") || "0.0");
let f1 = (9 * c1) / 5 + 32;
console.log("The value in Fahrenheit is " + f1);
let f2 = parseFloat(prompt("Enter value of Fahrenheit:") || "0.0");
let c2 = (f2 - 32) * (5 / 9);
console.log("The value in Celcius is " + c2);
//# sourceMappingURL=2_Temperature_Convert.js.map
