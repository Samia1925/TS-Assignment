"use strict";
let rows = parseInt(prompt("Enter the number of rows for Floyd's Triangle:") || "0");
let n = 1;
for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + n + " ";
        n++;
    }
    console.log(row);
}
//# sourceMappingURL=7_FloydTriangle.js.map
