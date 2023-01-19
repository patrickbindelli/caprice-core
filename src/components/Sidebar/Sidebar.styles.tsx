import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

interface NavbarProps {
  width: number;
}

export const Navbar = styled.div.attrs(({ width }: NavbarProps) => ({
  style: {
    width: width,
  },
}))<NavbarProps>`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 100%;
  position: relative;
  min-width: 200px;
  max-width: 500px;
  padding: 2px 10px;
  transition: width 300ms ease-out;

  @media only screen and (max-width: 900px) {
    position: absolute;
    top: 0;
    left: -100%;
  }
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
    background: ${({ theme }) => theme.colors.primary.main}70;
  }

  :hover::before {
    content: '';
    display: block;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  gap: 100px;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5em;
  height: 50px;
  padding: 0px 10px;
`;
