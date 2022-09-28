import React from 'react';
import styled from 'styled-components';
import { Column, Row, LilCircle, LilHT, Btn, Info } from './style.jsx'
import axios from 'axios';

const StatsHead = styled.p`
  font-size: 150%;
`

const Tosses = (props) => {

  let handleSettle = (id, bol) => {
    axios.put(`http://localhost:3000/settle`, { bol: !bol, id: id })
      .catch(err => { console.log(err) })
      .then(response => {
        axios.get(`http://localhost:3000/recentTosses`)
          .catch(err => {
            console.log(err)
          })
          .then(response => {
            props.setTosses(response.data)
          })
      })
  }

  let handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete`, { data: { id: id } })
      .catch(err => { console.log(err) })
      .then(response => {
        axios.get(`http://localhost:3000/recentTosses`)
          .catch(err => {
            console.log(err)
          })
          .then(response => {
            props.setTosses(response.data)
          })
      })
  }

  return (
    <Row>
      <StatsHead>RECENT TOSSES</StatsHead>
      <Row>
        {props.tosses.map((toss, index) => {
          return (
            <span key={index}>
              <span>
                <LilCircle>
                  <LilHT>{toss.landed[0]}</LilHT>
                </LilCircle>
              </span>
              <br/>
              <span>
                <Info>called:{toss.landed}</Info>
                <Info>{toss.date}</Info>
                <Info>stake:{toss.stake.length < 20 ? toss.stake :toss.stake.split('').slice(0,20).join('')+'...'}</Info>
                <Info>settled:{toss.settled === false ? 'false' : 'true'}</Info>
                <br/>
                <span><Btn onClick={() => { handleSettle(toss._id, toss.settled) }}>{toss.settled === false ? 'settle' : 'unsettle'}</Btn></span>
                <span><Btn onClick={() => { handleDelete(toss._id) }}>delete</Btn></span>
              </span>
            </span>
              )
        })}

            </Row>

    </Row>

  );
}

export default Tosses;