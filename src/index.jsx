import React from 'react';
import { createRoot } from "react-dom/client";
import Coin from './coin.jsx'

const App = () => {
return (
  <div>
    <h1 >Chance Toss</h1>

    <p> SEE WHAT CHANCE WILL YIELD</p>
    <Coin></Coin>
  </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App/>);