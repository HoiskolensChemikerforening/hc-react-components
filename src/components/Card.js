import React from 'react';
import styled, { css } from 'styled-components';
import '../index.css';
import {Container} from './Layout';
import {H1, P, H2, H3} from './Text';
import {Button} from './Button'








const CardContainer = styled.div`
  border: 5px;
  padding: 25px 12px 18px;
  width: 100%;
  height: 100%;
  background: var(--primary);
  border-radius: 10px;
  ${props => props.gray && css`
    color: var(--gray-80);
  `}

`


const Card = (props) => (
    <CardContainer >
        <img style = {{width: '100%', height: '40%'}} src={require('./test.jpg')} alt="Dette skal være et bilde" />
        <P>{props.data.subtitle}</P>
        <H2>{props.data.title}</H2>
        <Button style={{border: '3px solid black', margin: '0 auto', display: 'block'}}>TIL ARTIKKELEN</Button>
    </CardContainer>
)

export { Card,
    
};
