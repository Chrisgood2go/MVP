import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import Coin from './coin.jsx'
import Tosses from './tosses.jsx'
import axios from 'axios';
import styled from 'styled-components';
import { Row, Column } from './style.jsx'




const App = () => {
  const [tosses, setTosses] = useState('')
  const [stakes, setStakes] = useState('');
  const [call, setCall] = useState('HEADS');
  const [result, setResult] = useState('');



  React.useEffect(() => {
    if (result !== '') {
      axios.post(`http://localhost:3000/Toss`, {
        call: call,
        result: result,
        stakes: stakes !== '' ? stakes : 'nothing entered',
        settled: false
      })
        .catch(err => { console.log(err) })
        .then(response => {
          axios.get(`http://localhost:3000/recentTosses`)
            .catch(err => {
              console.log(err)
            })
            .then(response => {
              setTosses(response.data)
            })
        })
    } else {
      axios.get(`http://localhost:3000/recentTosses`)
        .catch(err => {
          console.log(err)
        })
        .then(response => {
          setTosses(response.data)
        })
    }
  }, [])

  return (
    <div>
      <Coin setStakes={setStakes} setCall={setCall} setResult={setResult}></Coin>
      <Tosses></Tosses>

    </div>


  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);