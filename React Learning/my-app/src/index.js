import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


const App = () => { 
  const [num, fy] = useState(1);
  return <div id='WhiteScreen'>
    <div id='ProgressSection'>
      <div className={`ProgressSphere ${num >= 1 && "ProgressSphere-active"}`}></div>
      <div className={`ProgressSphere ${num >= 2 && "ProgressSphere-active"}`}></div>
      <div className={`ProgressSphere ${num >= 3 && "ProgressSphere-active"}`}></div>
    </div>
    <div id='ButtonSection'>
      <button onClick={ () => { if(num >= 2){ fy(num-1) } } }>Decrement</button>
      <button onClick={ () => { if(num <= 2){ fy(num+1) } } }>Increment</button>
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)