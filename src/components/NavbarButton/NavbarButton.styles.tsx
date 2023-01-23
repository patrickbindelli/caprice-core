import styled, { css } from 'styled-components';

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

  background: ${({ selected, theme }) =>
    selected ? theme.colors.mauve5 : 'transparent'};

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  @media (min-width: 1024px) {
    ${({ theme, selected }) => {
      if (!selected) {
        return css`
          :hover {
            background: ${theme.colors.mauve4};
          }
        `;
      }
    }}
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
