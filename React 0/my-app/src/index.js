import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];
const carsData = [
  {
    name: "Civic",
    company: "Honda",
    model: "RS Turbo",
    launchYear: 2022,
    price: 8500000,
    average: "14 km/l"
  },
  {
    name: "Corolla",
    company: "Toyota",
    model: "Altis 1.8",
    launchYear: 2021,
    price: 7200000,
    average: "12 km/l"
  },
  {
    name: "Model S",
    company: "Tesla",
    model: "Plaid",
    launchYear: 2023,
    price: 30000000,
    average: "Electric (600 km range)"
  },
  {
    name: "Mustang",
    company: "Ford",
    model: "GT",
    launchYear: 2020,
    price: 25000000,
    average: "8 km/l"
  },
  {
    name: "Elantra",
    company: "Hyundai",
    model: "GLS",
    launchYear: 2022,
    price: 6800000,
    average: "13 km/l"
  },
  {
    name: "Sportage",
    company: "KIA",
    model: "AWD",
    launchYear: 2023,
    price: 9500000,
    average: "11 km/l"
  },
  {
    name: "Swift",
    company: "Suzuki",
    model: "GLX",
    launchYear: 2021,
    price: 4500000,
    average: "16 km/l"
  },
  {
    name: "Fortuner",
    company: "Toyota",
    model: "Legender",
    launchYear: 2022,
    price: 18000000,
    average: "10 km/l"
  }
];

const App = () => { 
  return <div><Background/></div>
}
const Background = () =>{
  return<div id="Background">
    {carsData.map((car,index) => {
     return <Card carobj = {car} key = {index}/>
    })}
    </div>
}
const Card = (props) => {
  return<div id="Card">
    <div id='carcomname'>
      <p id='CarName'>{props.carobj.name}</p>
      <p id='CompanyName'>{props.carobj.company}</p>
    </div>
    <div id='carDetails'>
      <p className='details'>{props.carobj.model}</p>
      <p className='details'>{props.carobj.launchYear}</p>
      <p className='details'>{props.carobj.price}</p>
      <p className='details'>{props.carobj.average}</p>
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)