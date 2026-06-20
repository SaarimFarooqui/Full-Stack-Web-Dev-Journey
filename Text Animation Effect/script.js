let text = document.querySelector(".text");
let spans = text.innerText.split('').map((letter,i)=> `<span>${letter}</span>`).join('');
text.innerHTML = spans;
console.log(spans);