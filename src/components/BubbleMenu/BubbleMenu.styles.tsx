import styled, { css } from 'styled-components';

import { BubbleMenu } from '@tiptap/react';

export const Container = styled(BubbleMenu)`
  display: flex;
  background-color: ${({ theme }) => theme.colors.mauve3};
  border: 1px solid ${({ theme }) => theme.colors.mauve6};
  border-radius: 5px;

  height: 30px;
  margin: 10px;
`;

interface BubbleMenuButtonProps {
  selected: boolean;
}

export const BubbleMenuButton = styled.button<BubbleMenuButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  border: none;
  outline: none;
  background-color: transparent;
  transition: background-color 100ms ease-in-out, stroke 100ms ease-in-out,
    color 100ms ease-in-out;

  color: ${({ theme }) => theme.colors.mauve12};

  border-radius: 5px;

  ${({ selected, theme }) => {
    if (selected) {
      return css`
        color: ${theme.colors.violet7};
        path {
          stroke: ${theme.colors.violet7};
        }
      `;
    }
  }}

  :hover {
    background-color: ${({ theme }) => theme.colors.mauve4};
  }
`;
