import React from 'react';
import styled from 'styled-components';
import { Btn, CallSel, CallDiv, InputStake, Stakes, Tails, Heads, Circle, Column } from './style.jsx'



const Coin = (props) => {
  return (
    <Column>
      <h1 >Chance Toss</h1>
      <p> SEE WHAT CHANCE WILL YIELD</p>
      <br />
      <Circle>
        <Heads>HEADS</Heads>
      </Circle>
      <br />
      <br />
      < Stakes htmlFor="stakes"> STAKES </Stakes>
      <InputStake id="stakes" name="stakes" maxlength="280" />
      <br />
      <br />
      <CallDiv>
        <CallSel>
          <option value="0">HEADS</option>
          <option value="1">TAILS</option>
        </CallSel>
        <span> </span>
        <Btn>TOSS</Btn>
      </CallDiv>
    </Column>

  );
}

export default Coin;