import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import Coin from './coin.jsx'
import Tosses from './tosses.jsx'
import axios from 'axios';
import styled from 'styled-components';
import { Row, Column } from './style.jsx'




const App = () => {
  const [tosses, setTosses] = useState([
    {
      _id: "63348dd2d12481c92ddca716",
      name: 'Chris',
      identifier: 'test',
      date: "2022-09-28T18:09:22.178Z",
      call: 'HEADS',
      landed: 'HEADS',
      stake: 'nothing entered',
      settled: false,
      __v: 0
    },
    {
      _id: "633487a1d12481c92ddca712",
      name: 'Chris',
      identifier: 'test',
      date: "2022-09-28T17:42:57.946Z",
      call: 'HEADS',
      landed: 'TAILS',
      stake: 'watch she-hulk',
      settled: false,
      __v: 0
    },
    {
      _id: "633476bad74e2a272eb08d3e",
      name: 'Chris',
      identifier: 'test',
      date: "2022-09-28T16:30:50.912Z",
      call: 'TAILS',
      landed: 'HEADS',
      stake: 'aasdfasdfasdfaasd;flkansdf;laskdna;lskdnf;la',
      settled: false,
      __v: 0
    },
    {
      _id: "6334756cd74e2a272eb08d3b",
      name: 'Chris',
      identifier: 'test',
      date: "2022-09-28T16:25:16.061Z",
      call: 'HEADS',
      landed: 'TAILS',
      stake: 'nothing entered',
      settled: false,
      __v: 0
    },
    {
      _id: "633474bed74e2a272eb08d37",
      name: 'Chris',
      identifier: 'test',
      date: "2022-09-28T16:22:22.463Z",
      call: 'HEADS',
      landed: 'HEADS',
      stake: 'nothing entered',
      settled: false,
      __v: 0
    }
  ])
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
  }, [result])

  return (
    <div>
      <Coin setStakes={setStakes} setCall={setCall} setResult={setResult}></Coin>
      <Tosses tosses = {tosses} setTosses = {setTosses} ></Tosses>
    </div>


  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);