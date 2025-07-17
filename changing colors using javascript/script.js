let leftbox = document.getElementById("left");
let rightbox = document.getElementById("right");

const gradients = [
  "linear-gradient(45deg, #c800ffff, #ee0979)",
  "linear-gradient(45deg, #ff0000ff, #1900ffff)",
  "linear-gradient(45deg, #ff9500ff, #11ff00ff)",
  "linear-gradient(45deg, #00ffaeff, #76baffff)",
];
let sign = false

setInterval(()=>{
 let rightcurrentopacity = parseFloat(getComputedStyle(rightbox).opacity);
 if (rightcurrentopacity == 0){ 
  let randomInd = Math.floor(Math.random() * 3);
  rightbox.style.background = gradients[randomInd];
  sign = true;  
}
 else if (rightcurrentopacity == 1){ 
  let randomInd = Math.floor(Math.random() * 3);
  leftbox.style.background = gradients[randomInd];
  sign = false
}

 if(sign == false){
  rightcurrentopacity -= 0.01;
  rightbox.style.opacity = rightcurrentopacity;
 }else if(sign == true){
  rightcurrentopacity += 0.01;
  rightbox.style.opacity = rightcurrentopacity;
 }

}, 10)