/*
enum Seasons{
    Winter,
    Spring,
    Summer,
    Autumn
};

let current: Seasons = Seasons.Spring;
console.log(current);
current = Seasons.Autumn;
console.log(current)*/

// Числовые перечисления

/*enum Seasons {
    Winter = 1,
    Spring = 2,
    Summer = 3,
    Autumn = 4
}*/

// строковые
/*

enum Seasons {
    Winter = "Зима",
    Spring = "Весна",
    Summer = "Лето",
    Autumn = "Осень"
}
*/

// смешанные гетерогенные перечисления

/*enum Season {
    Winter = 1,
    Spring = "Весна",
    Summer = 3,
    Autumn = "Осень"
};
var current: Season = Season.Summer;
console.log(current);           // 3
console.log(Season.Autumn);     // Осень*/

// Перечисления в фукнциях

enum DayTime{
    Morning,
    Evening
};

function Welcome(dayTime: DayTime) {
    if(dayTime == DayTime.Morning){
        console.log("Good morning!");
    }
    else{
        console.log("Goog evening");
    }
}
let current: DayTime = DayTime.Morning;
Welcome(current);
