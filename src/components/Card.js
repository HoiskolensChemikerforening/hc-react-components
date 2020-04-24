import React from 'react';
import styled, { css } from 'styled-components';
import '../index.css';

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
    background: var(--gray-80);

  `}
  ${props => props.blue && css`
    background: blue;
 `}
  ${props => props.primary && css`
  background: var(--primary);
  border: 5px #ffd900 solid;
  `}
  ${props => props.secondary && css`
  border: 2px #212121 solid;
  background: var(--gray-40);
`}
`


const Card = (props) => (
    <CardContainer {...props}>
        <img style = {{width: '100%', height: '100%'}} src={require('./test.jpg')} alt="Dette skal være et bilde" />
        <P >{props.data.subtitle}</P>
        <H2 >{props.data.title}</H2>
        <Button style={{border: '3px solid black', margin: '0 auto', display: 'block', width: '100%', fontsize: '20.5vw'}} >TIL ARTIKKELEN</Button>
    </CardContainer>
)

export { Card,
    
};
