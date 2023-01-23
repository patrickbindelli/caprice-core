import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  height: 100%;

  overflow: hidden;
  overflow-y: auto;

  gap: 50px;
`;

export const TitleContainer = styled.div`
  font-size: 32px;
`;

interface EditorContainerProps {
  fullscreen: boolean;
  minWidth: number;
}
export const EditorContainer = styled.div<EditorContainerProps>`
  height: 100%;
  width: ${({ minWidth, fullscreen }) =>
    fullscreen ? '100%' : `${minWidth}px`};
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
`;
