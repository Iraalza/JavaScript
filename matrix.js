function matrix(n){
    var x = new Array(n);
    for (let i = 0; i < n; i ++){
       x[i] = n;
    }
    for (let i = 0; i < n; i ++){
        console.log(x.join(' '));
    }

}
matrix(3);
matrix(7);
matrix(2);