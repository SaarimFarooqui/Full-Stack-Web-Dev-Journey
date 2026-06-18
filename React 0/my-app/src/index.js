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
    <div id='navbar'>
      <p id='heading'>🌴 Far Away ✈️</p>
    </div>
    <div id='form-bar'>
      <form>
        <empty></empty>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({length:10}, (_ , i)=> (i - 1) + 1).map((i)=> <option value={i} key={i}>{i}</option>)}
        </select>
        <input value={product} onChange={(e) => setProduct(e.target.value)}></input>
        <button onClick={handleAdd}>Add</button>
        <empty></empty>
      </form>
    </div>
    <div id='showlist'>
      {items.map((item) => <p>The number of {item.item_name} we have is {item.number_of_items}</p>)}
    </div>
  </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)