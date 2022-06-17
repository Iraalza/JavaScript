function second(arr){
    var towns = [];
    for(let i = 0; i < arr.length; i++){
        var str = arr[i].split(" | ");
        towns.push({town: str[0], latitude: Number(str[1]).toFixed(2), longtitude: Number(str[2]).toFixed(2)});
    }
    towns.forEach(element => {
        console.log(element);
    });
}

second(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625']);