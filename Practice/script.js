let square = document.getElementById("card");

let num = 0;

setInterval(()=>{
    num = (num + 1) % 360;
    square.style.background = `linear-gradient(${num}deg, rgb(183, 0, 255), rgb(255, 0, 136))`;
}, 1)
