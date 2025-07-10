let bt = document.querySelector(".changeText");
let val = 0;
let change = () => {
    if (val == 0){
    bt.innerText = "The text has been changed";
    bt.style.backgroundColor = "green";
    val++;
    }else{
    bt.innerText = "Change Text";
    bt.style.backgroundColor = "white";
    val--;
    }
}