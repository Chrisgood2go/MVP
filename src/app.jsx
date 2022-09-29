import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import Coin from './coin.jsx'
import Tosses from './tosses.jsx'
import axios from 'axios';
import styled from 'styled-components';
import { Row, Column, Align} from './style.jsx'




const App = () => {
  const [tosses, setTosses] = useState([]);
  const [stakes, setStakes] = useState('');
  const [call, setCall] = useState('HEADS');
  const [result, setResult] = useState('');
  const [toggle, setToggle] = useState(0);


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
          console.log(response)
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
  }, [toggle])

  return (
    <Align>
      <Coin setStakes={setStakes} setCall={setCall} setResult={setResult} toggle = {toggle} setToggle = {setToggle}></Coin>
      <Tosses tosses = {tosses} setTosses = {setTosses} ></Tosses>
    </Align>


  );
}

export default App;