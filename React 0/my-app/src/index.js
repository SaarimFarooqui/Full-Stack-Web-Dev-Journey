import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import './animations.css'


const App = () => { 

  const [dateCount, setDateCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + dateCount)

  const formatted = date.toLocaleDateString('en-US', {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })
  const dds = dateCount ** 2 === 1 ? "day" : "days"
  const statement = ((dateCount === 0) && `Today is ${formatted}`) || ((dateCount < 0) ? `${dateCount * -1} ${dds} ago was ${formatted}` : `${dateCount} ${dds} from now will be ${formatted}`)  


  return <>
  <div id="background">
    <div id='box'>
    <div id='first'></div>
    <div id='second'></div>
    <div id='third'>{statement}</div>
    </div>
  </div>
  </>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App/></React.StrictMode>)