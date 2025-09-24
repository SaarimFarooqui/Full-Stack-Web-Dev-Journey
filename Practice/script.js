let box = document.getElementById("box");
let sign = 1;
let iterator = 1;

setInterval(()=>{
   if(iterator <= 1){ sign = 1;}else if(iterator >= 1.2){ sign = -1;};
   iterator += 0.001 * sign;
   box.style.scale = iterator;
},5)

