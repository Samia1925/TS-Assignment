function isPrime(num: number): boolean {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
        let num1 : number= parseInt(prompt("Enter first number:") || "0");
        let num2 : number= parseInt(prompt("Enter second number:") || "0");
        if(isPrime(num1)==true && isPrime(num2)==true){
            console.log("1");
        }else{
            console.log("0");
        }
