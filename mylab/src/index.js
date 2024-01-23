/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 */

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./components/style.css";

function App() {
  const thingsArray = ["Thing 1", "Thing 2"];
  const [atualiza, setAtualiza] = useState([]);

  function addItem() {
    const newThingText = `Thing ${thingsArray.length + 1}`;
    thingsArray.push(newThingText);
    console.log(thingsArray);
    
  }

  useEffect(() => {
    setAtualiza(thingsArray);
  }, []) 

  //const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {atualiza}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
