import styled from 'styled-components';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  padding: 50px 100px 200px 100px;
  gap: 10px;

  @media only screen and (max-width: 1024px) {
    padding: 50px 10px 200px 10px;
  }
`;

interface EditorProps {
  width: number | undefined;
}

export const EditorInner = styled.div<EditorProps>`
  position: relative;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  width: 100%;
  line-height: 1.5;
  position: relative;
  transition: max-width 500ms ease-in-out;
`;

export const TextInput = styled(ContentEditable)`
  outline: 0;
`;

export const Placeholder = styled.div`
  color: ${({ theme }) => theme.colors.text.disabled};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  user-select: none;
  pointer-events: none;
`;

export const DocumentTitle = styled.div<EditorProps>`
  position: relative;
  max-width: ${({ width }) => (width ? `${width}px` : '100%')};
  width: 100%;
  line-height: 1.5;
  position: relative;
  transition: max-width 500ms ease-in-out;
  font-size: 40px;
`;

export const TitlePlaceholder = styled.div`
  color: ${({ theme }) => theme.colors.text.disabled};
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  user-select: none;
  pointer-events: none;
`;
