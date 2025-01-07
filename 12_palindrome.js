"use strict";
let input = parseInt(prompt("enter the number") || "0");
let p;
function isPalindrome(input) {
    let num = input.toString();
    let rev = num.split('').reverse().join('');
    if (rev == num) {
        p = "YES";
    }
    else {
        p = "NO";
    }
    return p;
}
console.log(isPalindrome(input));
//# sourceMappingURL=12_palindrome.js.map
