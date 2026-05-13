import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 
  return <div><Pageone/></div>
}
const Pageone = () => {
  return <div className='background'>
    <Card/>
  </div>
}
const Card = () => {
  return <div id='card'>
    <div></div>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)