import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const App = () => { 
  return <div>
    <h1>What is Lorem Ipsum</h1>
    <Header/>
  </div>
}
const Header = () => {
  return <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)


