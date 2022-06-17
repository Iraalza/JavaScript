function third(arr1, arr2){
    var products = [];
    for(let i = 0; i < arr1.length; i += 2){
        products.push({name: arr1[i], count: arr1[i + 1]});
    }
    for(let i = 0; i < arr2.length; i += 2){
        for(let j = 0; j < products.length; j++){
            if(arr2[i] == products[j].name) 
            {
                products[j].count = Number(products[j].count) + Number(arr2[i + 1]);
                break;
            }
            if(j == products.length - 1) 
            {
                products.push({name: arr2[i], count: arr2[i + 1]});
                break;
            }
        }
    }
    for(let i = 0; i < products.length; i++){
        console.log(products[i]);
    }
}

third(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], 
      ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);