function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    } else {
        let temp: number = a % b;
        return gcd(b, temp);
    }
}


function lcm(a: number, b: number): number {
    return (a * b) / gcd(a, b);
}

function GCDAndLCM(): void {
    const a: number = parseInt(prompt("Enter 1st number: ") || "0");
    const b: number = parseInt(prompt("Enter 2nd number: ") || "0");

    if (isNaN(a) || isNaN(b)) {
        console.error("Invalid input. Please enter numeric values.");
        return;
    }

    const gcdResult: number = gcd(a, b);
    const lcmResult: number = lcm(a, b);

    console.log("GCD: " + gcdResult);
    console.log("LCM: " + lcmResult);
}

GCDAndLCM();
