import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 
  return <><Background/></>
}
const Background = () =>{
  return<div id="background"><Board/></div>
}

const Board = () => {
  
  const textmessage = [
    "Knowledge without action is wastefulness, and action without knowledge is foolishness.",
    "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.",
    "The world is divided into men who have wit and no religion and men who have religion and no wit."
  ]
  const [num, setNum] =  useState(0);  
  
  return <div id='board'>
    <ul id='numbering'>
      <li className={num >= 0 ? 'active' : ''}>1</li>
      <li className={num >= 1 ? 'active' : ''}>2</li>
      <li className={num >= 2 ? 'active' : ''}>3</li>
    </ul>
    <p id='text'>{textmessage[num]}</p>
    <div id='buttons'>
      <button onClick={() => num > 0 && setNum(num-1)}>Prev</button>
      <button onClick={() => num < 2 && setNum(num+1)}>Next</button>
    </div>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)