let input: number = parseInt(prompt("Enter the value of n: ") || "0");
function sumNum(number: number) {
    let sum : number= 0;
    for (let i = 1; i <= number; i++) {
        let temp: number = i * i;
        sum += temp;
    }
    return sum;
}
let result: number = sumNum(input);
console.log("The result of series is: " + result);
