let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

var audio = document.getElementById("audio");
audio.volume=0.1;

//Format: Date(year, month, day, hour, minute)
//Year is counter from o to 11
let endDate = new Date(2023,9,27,24);
// let endDate = new Date(2023,8,30,17,41);
// let endDate = new Date(2023,7,22,23,17);
//0utput value in milliseconds
let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();
    //Output value in milliseconds
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    //60sec => 1000 milliseconds
    let oneMin = 60 * 1000;
    //1hr => 60 minutes
    let oneHr = 60 * oneMin;
    //1 day => 24 hours
    let oneDay = 24 * oneHr;

    //Function to format number if it is single digit

    let addZeroes = num => num < 10 ? `0${num}`:num;
    //If end dat is before today date

    if(endTime < todayTime){
        window.location.href = 'index1.html';
        clearInterval(i);
        // document.querySelector(".countdown").innerHTML = `<h1>Birthday Has Passed!</h1>`;
        // document.querySelector("#head").innerHTML = ` `;


    }

    else{

        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        console.log(daysLeft,hrsLeft,minsLeft,secsLeft);

        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }

}

let i = setInterval(countdown,1000);
countdown();