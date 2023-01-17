import styled from 'styled-components';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  overflow-y: auto;
`;

export const EditorInner = styled.div`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: relative;
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
