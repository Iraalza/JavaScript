function rotation (arr, n){
    a = arr.length;
    let arr1 = new Array(a);
    if (n > a) {
        n -=a;
    }
    else{}
    for (let i = 0; i < arr.length; i++){
        if (i + n >= a){
            let c = i + n - a;
            arr1[i] = arr[c];
        }
        else {
            let c = i + n;
            arr1[i] = arr[c];
        }
    }
    console.log(arr1.join(' '));
}
rotation([51, 47, 32, 61, 21], 2);
rotation([32, 21, 61, 1], 4);
rotation([2, 4, 15, 31], 5);