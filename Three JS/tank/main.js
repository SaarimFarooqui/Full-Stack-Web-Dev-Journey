let ring = document.getElementById("ring");
let num = 0;

setInterval(() => {
    num = (num + 1) % 360;
    ring.style.transform = `rotateX(70deg) rotateY(20deg) rotateZ(${num}deg)`;
}, 5);
