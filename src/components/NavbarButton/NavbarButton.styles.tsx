import styled from 'styled-components';

interface Props {
  selected: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 5px;
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

  @media (min-width: 1024px) {
    :hover {
      background: ${({ theme }) => theme.colors.secondary.main};
      color: ${({ theme }) => theme.colors.secondary.contrastText};

      path {
        stroke: ${({ theme }) => theme.colors.secondary.contrastText};
      }
    }
  }

  position: relative;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  position: relative;
`;

export const TextWrapper = styled.div`
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0px;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
