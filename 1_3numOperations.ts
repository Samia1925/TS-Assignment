function calculateEquation(): void {
    const a: number = parseFloat(prompt("Enter value for a:") || "0");
    const b: number = parseFloat(prompt("Enter value for b:") || "0");
    const c: number = parseFloat(prompt("Enter value for c:") || "0");

    if (b - c === 0) {
        console.error("Error: Division by zero.");
    } else {
        const x: number = a / (b - c);
        console.log("The value of x is " + x);
    }
}

calculateEquation();
