/*  let myAge = 21
    let humanToDogRatio = 7
    let myDogAge = myAge * humanToDogRatio
    conosle.log(myDogAge)*/

/*  let bounsPoints = 50;
    console.log(bonusPoints);
    bonusPoints += 50;
    console.log(bonusPoints);
    bonusPoints -= 75;
    console.log(bonusPoints);
    bonusPoints += 45;
    console.log(bonusPoints);
*/ 

/* funtion countdown(){
    for (let i=1;i<=5;i++){
        console.log(i);
    }
} 
*/

/*  let lap1 = 30;
    let lap2 = 33;
    let lap3 = 35;

    function(let lap1, let lap2, let lap3){
        let totalTime = lap1 + lap2 + lap3;
        console.log(totalTime);
    }
    console.log(totalTime); <- błąd bo nie można odczytać leta z funkcji gdyż jego zasięg to ciało funkcji*/

/*  Moja wersja, wtedy można mieć script w head
    function increment(){
        let num = document.getElementById("number")
        let count = num.innerText
        //console.log(count)
        count = parseInt(count)
        count += 1
        num.innerText=count
    }*/

/*  let welcome = document.getelementById("welcome-el")
    let name = "Piotr"
    let greeting = "Welcome dear"
    welcome.innerText = greeting + " " + name
    welcome.innerText += " :D"*/

/* Netlify */

let num = document.getElementById("number") //model prawdziwego objektu html
let entries = document.getElementById("saved-p")
let count = 0
 
function increment(){
    count += 1
    //console.log(count)
    num.textContent=count
}
function save(){
    let countStr = num.innerText
    entries.textContent += countStr + " - "
    //console.log(countStr)
    num.textContent = 0
    count = 0
}