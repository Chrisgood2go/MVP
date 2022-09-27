import React from 'react';
import styled from 'styled-components';
import { createRoot } from "react-dom/client";

const Circle = styled.div`
display: flex;
justify-content: center;
background: transparent;
  border-radius: 50%;
  border: solid;
  border-color: #00CFFF;
  width: 300px;
  height: 300px;
`
const Heads = styled.div`
background: transparent;
margin: 25%;
text-align: center;
line-height: 150px;
font-family: Monaco;
font-size: 200%;
color: #FFB03A;
text-shadow: 0 0 5px #FFB03A;
  border: solid;
  border-color: #ffffff;
  width: 150px;
  height: 150px;
`
const Tails = styled.div`
background: transparent;
margin: 25%;
text-align: center;
line-height: 150px;
font-family: Monaco;
font-size: 200%;
color: #FFB03A;
  border: solid;
  border-color: #ffffff;
  width: 150px;
  height: 150px;
`
const Stakes = styled.label`
background: transparent;
text-align: center;
font-family: verdana;
font-size: 120%;
color: #B3EFFF;
display:block;
`
const InputStake = styled.input`
background: transparent;
font-family: arial;
font-size: 20px;
color: #ffffff;
  border: solid;
  border-color: #B3EFFF;
  width: 100%;
  height: 30px;
  border-radius: 10% / 95%;
`
const CallDiv = styled.div`
text-align: center;
`
const CallSel = styled.select`
background: transparent;
font-family: verdana;
font-size: 120%;
color: #B3EFFF;
border-color: #FFB03A;
border-width: thin;
border-radius: 10% / 95%;
cursor: pointer;
`
const Btn = styled.button`
background: transparent;
font-family: verdana;
font-size: 120%;
color: #FFB03A;
border-color: #B3EFFF;
border-width: thin;
border-radius: 10% / 95%;
  margin: 4px 2px;
  cursor: pointer;
  display: inline;
`
export {Btn, CallSel, CallDiv, InputStake, Stakes, Tails, Heads, Circle}