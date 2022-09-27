import React from 'react';
import styled from 'styled-components';
import { Btn, CallSel, CallDiv, InputStake, Stakes, Tails, Heads, Circle } from './coinStyle.jsx'



const Coin = () => {
  return (
    <div>
      <Circle>
        <Heads>HEADS</Heads>
      </Circle>
      <br />
      <br />
      <Stakes for="stakes"> STAKES </Stakes>
      <InputStake type="text" id="stakes" name="stakes" />
      <br />
      <br />
      <CallDiv>
        <CallSel>
          <option value="0">CALL</option>
          <option value="1">HEADS</option>
          <option value="2">TAILS</option>
        </CallSel>
        <span> </span>
        <Btn>TOSS</Btn>
      </CallDiv>


    </div>

  );
}

export default Coin;