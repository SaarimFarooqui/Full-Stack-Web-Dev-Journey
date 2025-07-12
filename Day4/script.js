let a1 = document.getElementById("a1");

let a2 = document.getElementById("a2");

let a3 = document.getElementById("a3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let barDiv1 = document.getElementById("que1");
let barDiv2 = document.getElementById("que2");
let barDiv3 = document.getElementById("que3");

function changeAlpha(aEL, btnEL, barDivEL, answer){
    if (aEL.innerText === "****"){
        aEL.innerText = "Answer: " + answer;
        btnEL.innerText = "Hide";
        barDivEL.style.background = "blue";
    }else{
        aEL.innerText = "****";
        btnEL.innerText = "Show";
        barDivEL.style.background = "linear-gradient(35deg, red, purple, blue)";
    }
}

