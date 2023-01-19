import { useState } from 'react';
import { Editor } from '../Editor';
import { EditorHeader } from '../EditorHeader';
import { Container } from './Document.styles';

interface Props {
  mobileClick: () => void;
}

const Document: React.FC<Props> = ({ mobileClick }) => {
  const [fullscreeen, setFullscreen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <Container>
      <EditorHeader title={title} mobileClick={mobileClick} />
      <Editor width={900} fullscreen={fullscreeen} />
    </Container>
  );
};

export default Document;
