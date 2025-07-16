let leftbox = document.getElementById("left");
let rightbox = document.getElementById("right");

const gradients = [
  "linear-gradient(45deg, #ff6a00, #ee0979)",
  "linear-gradient(45deg, #00c6ff, #0072ff)",
  "linear-gradient(45deg, #f7971e, #ffd200)",
  "linear-gradient(45deg, #43cea2, #185a9d)",
  "linear-gradient(45deg, #7b4397, #dc2430)",
  "linear-gradient(45deg, #00b09b, #96c93d)",
  "linear-gradient(45deg, #f953c6, #b91d73)",
  "linear-gradient(45deg, #3a1c71, #d76d77, #ffaf7b)",
  "linear-gradient(45deg, #1f4037, #99f2c8)",
  "linear-gradient(45deg, #0f2027, #203a43, #2c5364)"
];

setInterval(()=>{
 let currentopacity = parseFloat(getComputedStyle(rightbox).opacity);
 currentopacity -= 0.01;
 rightbox.style.opacity = currentopacity;
}, 10)