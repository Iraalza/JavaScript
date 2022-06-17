function Divider (num){
    if (num % 10 == 0){
        console.log("Число делится на 10");
    }
    else if (num % 7 == 0){
        console.log("Число делится на 7");
    }
    else if (num % 6 == 0){
        console.log("Число делится на 6");
    }
    else if (num % 3 == 0){
        console.log("Число делится на 3");
    }
    else if (num % 2 == 0){
        console.log("Число делится на 2");
    }
    else {
        console.log("Не делится");
    }
}
Divider(30);
Divider(15);
Divider(12);
Divider(1643);