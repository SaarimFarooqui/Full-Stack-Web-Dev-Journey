import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

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
  return <div className='background'>
    <div id="headingDiv"><p id='headingText'>The Pizza House Co.</p></div>
    <div id='pizzaSection'><NewApp/></div>
  </div>
}

const NewApp = () => {
  return pizzaData.map((element) => (<Pizza name = {element.name} ingredients = {element.ingredients} price = {element.price} sellStatus = {element.soldOut} image={element.photoName}/>
  ))
}

const Pizza = (props) => {
  return <div className='box'>
      <div className='frame'><img src= {props.image} alt='pizzaImage'></img></div>
      <div className='frame' id='lowerframe'>
        <p id='pizzaName' className='pizzaText'>{props.name}</p>
        <p id='pizzaInfo' className='pizzaText'>{props.ingredients}</p>
        <p id='pizzaInfo' className='pizzaText'>Price: {props.price}</p>
        <p id='pizzaInfo' className='pizzaText'>Sold Out: {props.sellStatus ? "Available":"Sold Out"}</p>
        </div>  
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)


