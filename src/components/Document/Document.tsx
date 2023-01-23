import { useState } from 'react';
import { EditorHeader } from '../EditorHeader';
import { Container, EditorContainer, TitleContainer } from './Document.styles';
import { Editor, PlainTextEditor } from '../Editor';
interface Props {
  mobileClick: () => void;
}

const Document: React.FC<Props> = ({ mobileClick }) => {
  const [fullscreeen, setFullscreen] = useState(true);
  const [title, setTitle] = useState('');

  return (
    <Container>
      <EditorHeader title={title} mobileClick={mobileClick} />
      <EditorContainer minWidth={900} fullscreen={fullscreeen}>
        <TitleContainer>
          <PlainTextEditor placeholder="Untitled" />
        </TitleContainer>
        <Editor />
      </EditorContainer>
    </Container>
  );
};

export default Document;
