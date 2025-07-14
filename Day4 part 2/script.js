let mainContainer = document.querySelector(".mainContainer");

let colors = [
    "linear-gradient(45deg,blue,purple)",
    "linear-gradient(45deg,red,orange)",
    "linear-gradient(45deg,green,yellow)",
    "linear-gradient(45deg,pink,black)",
    "linear-gradient(45deg,blue,green)",
    "linear-gradient(45deg, #ff6a00, #ee0979)",        // orange to deep pink
    "linear-gradient(45deg, #00c6ff, #0072ff)",        // light blue to royal blue
    "linear-gradient(45deg, #f7971e, #ffd200)",        // orange to yellow
    "linear-gradient(45deg, #43cea2, #185a9d)",        // mint to deep blue
    "linear-gradient(45deg, #7b4397, #dc2430)",        // violet to red
    "linear-gradient(45deg, #c33764, #1d2671)",        // magenta to indigo
    "linear-gradient(45deg, #00b09b, #96c93d)",        // teal to lime green
    "linear-gradient(45deg, #f953c6, #b91d73)",        // light pink to wine
    "linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b)", // purple to pink to peach
    "linear-gradient(45deg, #1f4037, #99f2c8)",        // dark green to aqua
    "linear-gradient(45deg, #0f2027, #203a43, #2c5364)", // deep blackish blue blend
    "linear-gradient(45deg, #e96443, #904e95)"  
]

let number = 0;
while(number < colors.length){
    let divBox = document.createElement("div");
    divBox.style.width = "20vw";
    divBox.style.height = "20vh";
    divBox.style.borderRadius = "15px";
    divBox.style.background = colors[number];
    mainContainer.appendChild(divBox);
    number++;
}