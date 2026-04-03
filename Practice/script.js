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

const findOutput = techProducts.find(i => i.id === 10);
const findIndexOutput = techProducts.findIndex(i => i.id === 4);
const someOutput = techProducts.some(i => i.company === "Apple");
const filterOutput = techProducts.filter(i => i.price >= 500);
const totalPrice = techProducts.reduce((sum, obj) => sum + obj.price ,0);
console.log(totalPrice);
