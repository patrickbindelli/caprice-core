import { useState } from 'react';
import { Editor } from '../Editor';
import { EditorHeader } from '../EditorHeader';

interface Props {
  mobileClick: () => void;
}

const Document: React.FC<Props> = ({ mobileClick }) => {
  const [fullscreeen, setFullscreen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <>
      <EditorHeader title={title} mobileClick={mobileClick} />
      <Editor width={900} fullscreen={fullscreeen} />
    </>
  );
};

export default Document;
