import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 
  return <div><Pageone/></div>
}
const Pageone = () => {
  return <div className='background'></div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)