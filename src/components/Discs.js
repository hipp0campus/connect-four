import React from 'react';
import styled, { keyframes } from 'styled-components';

const fallDown = keyframes`
  0% {
    transform: translateY(-560%);
  }

  12% {
    transform: translateY(-370%);
  }

  24% {
    transform: translateY(-150%);
  }

  36% {
    transform: translateY(-2%);
  }
  
  54% {
    transform: translateY(-25%);
  }
  
  74% {
    transform: translateY(-1.63%);
  }
  
  82% {
    transform: translateY(-6.25%);
  }
  
  92% {
    transform: translateY(-0.66%);
  }
  
  96% {
    transform: translateY(-1.54%);
  }
  
  100% {
    transform: translateY(0%);
  }
`;

const Disc = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  z-index: ${props => props.activePlayer ? 1 : -1};
  background: ${props => props.activePlayer === 'yellow' ? '#e8e203' : '#ff0303'};

  box-shadow: ${props => props.activePlayer === 'yellow' ? 
    'inset 5px 5px 8px #979302, inset -5px -5px 8px #ffff04' : 
    'inset 5px 5px 8px #a60202, inset -5px -5px 8px #ff0404'
  };

  animation-name: ${props => props.activePlayer ? fallDown : 'none'};
  animation-duration: 0.7s;
  animation-fill-mode: forwards;
`;

function Discs({activePlayer}) {
  return <Disc activePlayer={activePlayer}></Disc>
}

export default Discs;