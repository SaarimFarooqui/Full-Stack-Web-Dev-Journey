let container = document.getElementById("container");
let btnAdd = document.getElementById("add");
let btnRemover = document.getElementById("remove");

btnAdd.addEventListener("click", () => {
    let newdiv = document.createElement("div");
    newdiv.style.backgroundColor = "black";
    newdiv.style.width = "100%";
    newdiv.style.height = "1in";
    newdiv.style.transition = "all 0.5s ease"
    newdiv.style.opacity = "0";
    setTimeout(() => {
        newdiv.style.opacity = "1";
    },10)
    container.appendChild(newdiv);
});

btnRemover.addEventListener("click", () => {
    const lastdiv = container.lastElementChild;
    if (lastdiv){
    container.removeChild(lastdiv);
    }
})