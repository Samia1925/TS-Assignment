let a1: number = parseFloat(prompt("Enter a1:") || "0.0");
let b1: number = parseFloat(prompt("Enter b1:") || "0.0");
let c_1: number = parseFloat(prompt("Enter c1:") || "0.0");
let a2: number = parseFloat(prompt("Enter a2:") || "0.0");
let b2: number = parseFloat(prompt("Enter b2:") || "0.0");
let c_2: number = parseFloat(prompt("Enter c2:") || "0.0");

let determinant: number = a1 * b2 - a2 * b1;

if (determinant === 0) {
    console.log("No solution");
} else {
    let x: number = (c_1 * b2 - c_2 * b1) / determinant;
    let y: number = (a1 * c_2 - a2 * c_1) / determinant;
    console.log("The solution is: x = " + x + ", y = " + y);
}
