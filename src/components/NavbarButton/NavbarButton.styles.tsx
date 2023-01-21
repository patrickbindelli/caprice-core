import styled from 'styled-components';

interface Props {
  selected: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 10px;
  gap: 10px;

  width: 100%;
  height: 30px;

  border: none;
  border-radius: 5px;
  margin-bottom: 1px;

  color: ${({ selected, theme }) =>
    selected
      ? theme.colors.secondary.contrastText
      : theme.colors.text.disabled};

  background: ${({ selected, theme }) =>
    selected ? theme.colors.secondary.main : 'transparent'};

  path {
    stroke: ${({ selected, theme }) =>
      selected
        ? theme.colors.secondary.contrastText
        : theme.colors.text.disabled};
  }

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.secondary.contrastText};

    path {
      stroke: ${({ theme }) => theme.colors.secondary.contrastText};
    }
  }
`;
