let headBar = document.getElementById("heading");

setInterval(() => {
    if (rgb(0, 0, 0) == getComputedStyle(headBar).backgroundColor) {
        headBar.style.backgroundColor = "rgb(0, 2, 99)";
    } else {
        headBar.style.backgroundColor = "black";
    }
}, 1000);
