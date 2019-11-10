import styled, { keyframes } from "styled-components"

const Keyframes = keyframes`
  0% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0rem);
    opacity: 1;
  }
`

export const ContactBtn = styled.div`
  display: grid;
  grid-column: 5 / 6;
  grid-row: 2 / 3;
  justify-self: center;
  align-self: center;
  z-index: 100;
  opacity: 0;
  background-color: blue;

  animation-name: ${Keyframes};
  animation-duration: 1s;
  animation-delay: 0.9s;
  animation-timing-function: ease;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;

  @media (max-width: 768px) {
    background-color: red;
  }
`
