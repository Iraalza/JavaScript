function Age (num){
    if (num >= 0 && num <= 2){
        console.log("Младенец");
    }
    else if (num >= 3 && num <= 13){
        console.log("Ребенок");
    }
    else if (num >= 14 && num <= 19){
        console.log("Подросток");
    }
    else if (num >= 20 && num< 65){
        console.log("Взрослый");
    }
    else if (num >= 65){
        console.log("Пожилой");
    }
}
Age(10);
Age(1);
Age(20);
Age(100);
Age(17);