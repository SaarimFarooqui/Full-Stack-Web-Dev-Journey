import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 
  return <> 
  <div id='background'>
    <div id='top-bar'>
      <div id='left'>
        <empty></empty>
        <a></a>
        <a></a>
        <a></a>
        <empty></empty>
      </div>
    </div>
  </div> 
  <div id='backgroundII'>
    <select>
      {Array.from({length: 10}, (_, i) => i+1).map((num) => <option value={num} key={num}>{num}</option>)}
    </select>
  </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)