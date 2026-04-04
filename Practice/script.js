async function printData(){
  const api = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await api.json();
  data.forEach((obj) => {console.log(obj)})
}

printData()