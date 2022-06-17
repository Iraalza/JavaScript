function WonderfulMatrix (arr){
    a = arr[0][0] + arr[0][1] + arr[0][2];
    b = arr[1][0] + arr[1][1] + arr[1][2];
    c = arr[2][0] + arr[2][1] + arr[2][2];
    d = arr[0][0] + arr[1][0] + arr[2][0];
    e = arr[0][1] + arr[1][1] + arr[2][1];
    f = arr[0][2] + arr[1][2] + arr[2][2];
    if (a == b & a == c & a == d & a == e & a == f){
        console.log("true");
    }
    else{
        console.log("false");
    }
}
WonderfulMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
WonderfulMatrix([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
WonderfulMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);