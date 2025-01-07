let c1: number = parseFloat(prompt("Enter value of Celcius:") || "0.0");
        let f1: number = (9*c1)/5 + 32;
        console.log("The value in Fahrenheit is " + f1);

        let f2: number = parseFloat(prompt("Enter value of Fahrenheit:") || "0.0");
        let c2: number = (f2-32)*(5/9);
        console.log("The value in Celcius is " + c2);
