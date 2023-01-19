import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main}70;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  path {
    stroke: ${({ theme }) => theme.colors.text.primary};
  }
`;
export const TitleWrapper = styled.div`
  font-size: 15px;

  :empty::before {
    content: attr(placeholder);
    cursor: text;
  }

  :empty:focus::before {
    content: '';
  }
`;

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  path {
    stroke: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: 0;
  height: 30px;

  padding: 10px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    path {
      stroke: ${({ theme }) => theme.colors.secondary.contrastText};
    }
  }
`;

export const MobileButton = styled(Button)`
  @media (min-width: 1024px) {
    display: none;
  }
`;
