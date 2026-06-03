import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 

  const date = new Date();
  const formatted = date.toLocaleTimeString('en-US', {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })
  
  const [count, setCount] = useState(0);

  return <>
  <div id="background">
    <div id='box'></div>
  </div>
  </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)