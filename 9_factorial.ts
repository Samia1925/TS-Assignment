function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    let f: number = n * factorial(n - 1);
    return f;
}

let nom: number = parseInt(prompt("Enter a number:") || "0");
let factor: number = factorial(nom);
console.log("The factorial of " + nom + " is " + factor);
