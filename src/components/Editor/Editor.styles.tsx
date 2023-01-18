import styled from 'styled-components';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  overflow-y: auto;
  padding: 0px 100px;
`;

interface EditorProps {
  width: number | undefined;
}

export const EditorInner = styled.div<EditorProps>`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
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
  color: #999;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 15px;
  user-select: none;
  pointer-events: none;
`;
