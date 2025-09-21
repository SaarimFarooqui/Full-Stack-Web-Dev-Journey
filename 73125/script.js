async function callAPI(){
    let res = await fetch("http://127.0.0.1:5000/hello");
    let data = await res.json();
    document.getElementById("message").innerText = data.message;
}