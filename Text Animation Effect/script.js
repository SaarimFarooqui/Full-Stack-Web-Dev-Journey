let text = document.querySelector(".text");
let spans = text.innerText.split('').map((letter,i)=> `<span style = "transition-delay: ${i*40}ms; filter: hue-rotate(${i*20}deg)" >${letter}</span>`).join('');
text.innerHTML = spans;
console.log(spans);