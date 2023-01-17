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
  color: ${({ theme }) => theme.colors.buttons.text};

  margin-bottom: 1px;

  background: ${({ selected, theme }) =>
    selected ? theme.colors.buttons.background : 'transparent'};

  path {
    stroke: ${({ theme }) => theme.colors.buttons.text};
  }

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.colors.buttons.background};
  }
`;
