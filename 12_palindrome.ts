        let input: number = parseInt(prompt("enter the number") || "0");
        let p: string;
        function isPalindrome(input: number) {
            let num : string= input.toString();
            let rev : string= num.split('').reverse().join('');
            if (rev == num) {
                p = "YES";
            }
            else {
                p = "NO";
            }
            return p;
        }
        console.log(isPalindrome(input));
