import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const App = () => { 
  return <div><FirstScreen/></div>
}
const FirstScreen = () => {
  return <div className='Background'>
    <div className='Navbar'>
      <ul className='UnorderedList'>
        <li className='List'><a href='www.google.com'>Home</a></li>
        <li className='List'><a>About</a></li>
        <li className='List'><a>Contact</a></li>
      </ul>
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)


