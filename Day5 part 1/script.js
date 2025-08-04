let list = [
    "linear-gradient(45deg,rgb(0, 145, 255),rgb(0, 255, 157))",
    "linear-gradient(45deg,rgb(238, 0, 255),rgb(64, 0, 255))",
    "linear-gradient(45deg,rgb(255, 0, 0),rgb(85, 0, 255))",
    "linear-gradient(45deg,rgb(255, 183, 0),rgb(51, 255, 0))",
    "linear-gradient(45deg,rgb(255, 140, 0),rgb(0, 255, 179))"
]
let container = document.getElementById("container"); /*The container containing the generated elements*/
let adder = document.getElementById("adder"); /*The add button on left*/
let remover = document.getElementById("remover"); /*The remove button on right*/
let placeAudio = document.getElementById("place"); /*load audio*/
let removeAudio = document.getElementById("remove"); /*brick audio*/

adder.addEventListener("click", function(){
        placeAudio.currentTime= 0;
        placeAudio.play();      
        let newDiv = document.createElement("div");
        newDiv.classList.add("element");
        let randomGradient = list[Math.floor(Math.random()*list.length)];
        newDiv.style.background = randomGradient;
        container.appendChild(newDiv);
        requestAnimationFrame(()=> {
            newDiv.classList.add("visible");
        });
});
remover.addEventListener("click", function(){
        if(container.lastElementChild){
        container.removeChild(container.lastElementChild);
        removeAudio.currentTime= 0;
        removeAudio.play();  
        }    
});
