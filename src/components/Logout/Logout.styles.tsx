import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from{
    transform: rotateZ(0deg);
  }
  to{
    transform: rotateZ(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    animation: ${rotate} 500ms infinite forwards linear;
  }
`;
