let dayOfWeek = "Monday";


function currentDay(dayOfWeek){
    let response;
    if(dayOfWeek === "Monday"){
        response = dayOfWeek;
    }
    else if( dayOfWeek === "Friday"){
        response = `I can't wait for ${dayOfWeek}`;
    }
    return response
}

console.log(currentDay(dayOfWeek));
dayOfWeek = "Friday"
console.log(currentDay(dayOfWeek));
1

let animalInput = prompt("What is your favorite animal?")

let colorInput = prompt("What is your favorite color")

console.log(`I've never seen a ${colorInput} ${animalInput} before!`)

//Coffee cake
//Macaroni
//Grilled chicken

let timeOfDay = 1300;
let meal;

if(timeOfDay < 1200) meal = "Coffee Cake";
else if(timeOfDay > 1700) meal = "Grilled Chicken";
else meal = "Macaroni";
console.log(meal);

let randomNum = Math.random() * 10;
if(randomNum <= 2) console.log("Beatles");
else if(randomNum >= 3 & randomNum < 6 ) console.log("Stones");
else if(randomNum >= 6 & randomNum <= 8 ) console.log("Floyd");
else if(randomNum > 8) console.log("Hendrix");

for(let i = 0; i < 7; i++){
    console.log("JavaScript is cool!");
}

for(let i = 0; i < 11; i++){
    console.log(i);
}

for(let i = 0; i < 5; i++){
    console.log("hello");
    console.log("goodbye");
}


function printMovieName(){
    let favMovie = "Enders Game";
    console.log(favMovie);
}
printMovieName();

function favoriteBand(){
    let favBand = prompt("What is your favorite band");
    return favBand;
}

let bandName = favoriteBand();
console.log(bandName);

function concertDisplay(musicalAct){
    let myStreet = prompt("What street do you live on?");
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}`);
}
concertDisplay(bandName);

let desktopItems = ["lamp", "microphone", "phone"]
console.log(desktopItems[1])
desktopItems.push("Infinity Gauntlet")

for(let item of desktopItems){
    console.log(item)
}



