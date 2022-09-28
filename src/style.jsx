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
  width: 100%
  height: 300px;
`
const Heads = styled.div`
background: transparent;
margin: 25%;
text-align: center;
line-height: 150px;
font-family: Monaco;
font-size: 300%;
color: #FFB03A;
text-shadow: 0 0 5px #FFB03A;
  /* border: solid;
  border-color: #ffffff; */
  width: 150px;
  height: 150px;
`

const Stakes = styled.label`
background: transparent;
text-align: center;
font-family: verdana;
font-size: 120%;
text-shadow: 0 0 5px #00CFFF ;;
color: #B3EFFF;
display:block;
`
const InputStake = styled.textarea`
background: transparent;
font-family: georgia;
text-transform: uppercase;
font-weight: 100;
font-size: 15px;
color: #ffffff;
  border: solid;
  border-width: thin;
  border-color: #B3EFFF;
  width: 100%;
  height: 75px;
  border-radius: 10%;
`
const CallDiv = styled.div`
text-align: center;
`
const CallSel = styled.select`
background: transparent;
font-family: verdana;
font-size: 120%;
color: #FFB03A;
border-color: #B3EFFF;
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
const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  width: 325px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
export { Btn, CallSel, CallDiv, InputStake, Stakes, Heads, Circle, Column, Row }