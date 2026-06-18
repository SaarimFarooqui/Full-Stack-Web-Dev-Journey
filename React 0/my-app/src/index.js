import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState("");
  const [items, setItems] = useState([]);
  
  const handleAdd = (e) => {
    e.preventDefault();
    const newitem = {
      number_of_items : quantity,
      item_name : product
    }
    setItems((prev) => [...prev, newitem]);
    setProduct("");
    setQuantity(1);
  }

  return <> 
  <div id='background'>
  </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)