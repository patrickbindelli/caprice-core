import styled from 'styled-components';

interface NavbarProps {
  width: number;
}

export const Container = styled.div.attrs(({ width }: NavbarProps) => ({
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
