function isPrime(num: number): boolean {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        }
        let num: number = parseInt(prompt("Enter the number:") || "0");
        
        if(isPrime(num)==true){
            console.log(num +" is prime");
        }else{
            console.log(num +" is not prime");
        }
