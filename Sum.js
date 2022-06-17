function slove (num){
    num = num.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    console.log(sum);
}
slove(245678);
slove(97561);
slove(543);