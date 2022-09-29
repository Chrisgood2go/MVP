import React, { useState } from 'react';
import styled from 'styled-components';
import { Btn, CallSel, CallDiv, InputStake, Stakes, Tails, Heads, Circle, Column } from './style.jsx'



const Coin = (props) => {
  const[side, setSide]=useState('HEADS');

  var handleChange = (e) => {
    props.setStakes(e.target.value)
  }

  var handleSelction =(e)=>{
    props.setCall(e.target.value)
    setSide(e.target.value)
  }

  var handleTossBtn = (e)=>{
    let count = 0;
    let diff = Math.abs(100-1);
    let random = (Math.round(Math.random()* diff +1));
    let IntervalId = setInterval(()=>{
      setSide(count % 2 === 0? 'HEAD': 'TAILS')
      count++
    },100)

    setTimeout(()=>{
      clearInterval(IntervalId)
      props.setResult(random % 2 === 0 ? 'HEADS' : 'TAILS');
      setSide(random % 2 === 0 ? 'HEADS' : 'TAILS')
      props.setToggle(props.toggle === 0 ? 1 : 0)
    },1000)
  }

  return (
    <Column>
      <h1 >Chance Toss</h1>
      <p> SEE WHAT CHANCE WILL YIELD</p>
      <br />
      <Circle >
        <Heads>{side}</Heads>
      </Circle>
      <br />
      <br />
      < Stakes htmlFor="stakes"> STAKES </Stakes>
      <InputStake id="stakes" name="stakes" maxlength="280" onChange={handleChange}/>
      <br />
      <br />
      <CallDiv>
        <CallSel onChange = {handleSelction}>
          <option value="HEADS">HEADS</option>
          <option value="TAILS">TAILS</option>
        </CallSel>
        <span> </span>
        <Btn onClick ={handleTossBtn}>TOSS</Btn>
      </CallDiv>
    </Column>

  );
}

export default Coin;