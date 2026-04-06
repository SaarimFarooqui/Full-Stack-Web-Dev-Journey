const boxes = 10;

let html ="";

for (let i = 1;  i <= boxes; i++){
    html += `<div class="box"></div>`
}
const main = document.getElementById("main");

main.innerHTML = html;