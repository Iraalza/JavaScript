function Vacation (num, tipe, day){
    if (tipe == "Students"){
        if (day == "Friday"){
            if (num >= 30){
                let a = num * 8.45 * 0.85;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 8.45;
                console.log("Total price:", a.toFixed(2));
            }
        }
        else if (day == "Saturday"){
            if (num >= 30){
                let a = num * 9.80 * 0.85;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 9.80;
                console.log("Total price:", a.toFixed(2));
            }
        }
        else if (day == "Sunday"){
            if (num >= 30){
                let a = num * 10.46 * 0.85;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 10.46;
                console.log("Total price:", a.toFixed(2));
            }
        }
    }
    else if (tipe == "Corporate"){
        if (day == "Friday"){
            if (num >= 100){
                let a = (num - 10) * 10.90;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a =num * 10.90;
                console.log("Total price:", a.toFixed(2));
            }
        }
        else if (day == "Saturday"){
            if (num >= 100){
                let a = (num - 10) * 15.60;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 15.60;
                console.log("Total price:", a.toFixed(2));
            }
        }
        else if (day == "Sunday"){
            if (num >= 100){
                let a = (num - 10) * 16;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 16;
                console.log("Total price:", a.toFixed(2));
            }
        }
    }
    else if (tipe == "Regular"){
        if (day == "Friday"){
            if (num >= 10 && num <= 20){
                let a = num * 15 * 0.95;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 15;
                console.log("Total price:", a.toFixed(2));
            }
        }
        else if (day == "Saturday"){
            if (num >= 10 && num <= 20){
                let a = num * 20 * 0.95;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 20;
                console.log("Total price:", a.toFixed(2));
            }
        }
        else if (day == "Sunday"){
            if (num >= 10 && num <= 20){
                let a = num * 22.5 * 0.95;
                console.log("Total price:", a.toFixed(2));
            }
            else {
                let a = num * 22.5;
                console.log("Total price:", a.toFixed(2));
            }
        }
    }
}
Vacation(30, "Students", "Sunday");
Vacation(40, "Regular", "Saturday");