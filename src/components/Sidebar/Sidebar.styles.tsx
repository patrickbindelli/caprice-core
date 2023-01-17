import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Navbar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  min-width: 300px;
  position: relative;

  padding: 2px 10px;
`;

export const ResizeHandle = styled.div`
  width: 6px;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;

  cursor: e-resize;

  ::before {
    content: '';
    display: block;
    height: 100%;
    width: 1px;
    transition: width 250ms ease-in-out, background-color 250ms ease-in-out;
    background: rgb(255 255 255 / 10%);
  }

  :hover::before {
    content: '';
    display: block;
    height: 100%;
    width: 2px;
    background: rgb(255 255 255 / 15%);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5em;
  height: 50px;
  padding: 0px 10px;
`;
