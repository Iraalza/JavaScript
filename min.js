function min (a, b, c){
    if (a < b){
        if (a < c){
            console.log(a);
        }
        else {
            console.log(c);
        }
    }
    else {
        if (b < c){
            console.log(b);
        }
        else {
            console.log(c);
        }
    }
}
min(2, 5, 3);
min(600, 342, 123);
min(25, 21, 4);