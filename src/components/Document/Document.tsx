import { useState } from 'react';
import { Editor } from '../Editor';
import { EditorHeader } from '../EditorHeader';

const Document = () => {
  const [fullscreeen, setFullscreen] = useState(false);
  const [title, setTitle] = useState('');

  return (
    <>
      <EditorHeader title={title} />
      <Editor width={900} fullscreen={fullscreeen} />
    </>
  );
};

export default Document;
