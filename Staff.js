function Staff(arr){
    for(let i = 0; i < arr.length; i++){
        let staff = {ame : arr[i], num : arr[i].length};
        console.log("Name: " + staff.ame + "- Personal Number: " + staff.num);
    }
}
Staff(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Vallarreal']);