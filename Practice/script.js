const techProducts = [
  {
    id: 1,
    company: "Apple",
    product: "iPhone 15",
    category: "Smartphone",
    price: 999
  },
  {
    id: 2,
    company: "Samsung",
    product: "Galaxy S24",
    category: "Smartphone",
    price: 899
  },
  {
    id: 3,
    company: "Microsoft",
    product: "Surface Laptop 5",
    category: "Laptop",
    price: 1200
  },
  {
    id: 4,
    company: "Dell",
    product: "XPS 13",
    category: "Laptop",
    price: 1100
  },
  {
    id: 5,
    company: "Sony",
    product: "PlayStation 5",
    category: "Gaming Console",
    price: 499
  },
  {
    id: 6,
    company: "Google",
    product: "Pixel 8",
    category: "Smartphone",
    price: 799
  },
  {
    id: 7,
    company: "HP",
    product: "Spectre x360",
    category: "Laptop",
    price: 1300
  },
  {
    id: 8,
    company: "Lenovo",
    product: "ThinkPad X1 Carbon",
    category: "Laptop",
    price: 1400
  },
  {
    id: 9,
    company: "Amazon",
    product: "Echo Dot",
    category: "Smart Speaker",
    price: 49
  },
  {
    id: 10,
    company: "Meta",
    product: "Quest 3",
    category: "VR Headset",
    price: 499
  }
];

function addObject(array, object){
    const newarray = [...array, object];
    newarray.sort((a,b) => a.price - b.price);
    return newarray;
}
function deteleObj(array, id){
    const newarray = array.slice().filter((element) => element.id != id);
    return newarray;
}
function changePrice(array, id, newprice){
    const newarray = array.slice().map((element) => element.id == id ? {...element, price : newprice} : element)
    return newarray
}
newed = changePrice(techProducts, 2, 260)
console.log(newed)
