import React from 'react';
import styled from 'styled-components';
import { Column, Row } from './style.jsx'

const StatsHead = styled.p`
  font-size: 150%;
`

const Tosses = (props) => {
  return (
    <Column>
      <StatsHead>RECENT TOSSES</StatsHead>
      <Row>
      <div>asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfa</div>
      </Row>

    </Column>

  );
}

export default Tosses;