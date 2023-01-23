import styled from 'styled-components';

interface NavbarProps {
  width: number;
}

export const Container = styled.div.attrs(({ width }: NavbarProps) => ({
  style: {
    width: width,
  },
}))<NavbarProps>`
  background-color: ${({ theme }) => theme.colors.mauve2};
  height: 100%;
  position: relative;
  min-width: 200px;
  max-width: 500px;
  transition: width 300ms ease-out;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  overflow-y: auto;
`;

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.mauve6};
  padding: 10px;
`;

export const Title = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  font-size: 1.5em;
`;
