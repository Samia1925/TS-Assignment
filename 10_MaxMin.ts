const input: string | null = prompt("Enter a list of numbers separated by commas:");
if (input) {
    const array: number[] = input.split(",").map(num => parseFloat(num.trim()));
    const minValue: number = Math.min(...array);
    const maxValue: number = Math.max(...array);
    console.log("Minimum Element is: " + minValue);
    console.log("Maximum Element is: " + maxValue);
} else {
    console.error("No input provided.");
}
