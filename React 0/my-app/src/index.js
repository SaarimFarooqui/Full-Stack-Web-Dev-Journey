import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 
  return <> 
  <div id='background'>
    <div id='navbar'>
      <p id='heading'>🌴 Far Away ✈️</p>
    </div>
    <div id='form-bar'>
      <form>
        <empty></empty>
        <select>{Array.from({length:10}, (_ , i)=> i + 1).map((i)=> <option value={i} key={i}>{i}</option>)}</select>
        <input></input>
        <button></button>
        <empty></empty>
      </form>
    </div>
  </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)