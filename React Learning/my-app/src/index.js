import React from 'react';
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
  return <div><Background/></div>
}

const Background = () =>{
  return<div id="Background">
    {
      pizzaData.map((pizza) => {
        return <Card obj = {pizza} />
      })
    }
  </div>
}

const Card = (props) => {
  return <div id = "Card">
    <div className='Portion' id='CardLeft'>
      {
      props.obj.soldOut ? <img id='NotAvailable' src={props.obj.photoName} alt='PizzaImage'></img> : 
      <img src={props.obj.photoName} alt='PizzaImage'></img>
      }
    </div>
    <div className='Portion' id='CardRight'>
      <p className = "CardText" id="PizzaName">{props.obj.name}</p>
      <p className = "CardText" id="Ingredients">{props.obj.ingredients}</p>
      <p className = "CardText" id="Price">USD {props.obj.price}</p>
      {props.obj.soldOut && <p id="OutOfStock">Not Available</p>}
    </div>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)