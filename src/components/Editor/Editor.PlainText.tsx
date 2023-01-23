import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { useEditor } from '@tiptap/react';
import { Container, EditorContent } from './Editor.styles';
import Placeholder from '@tiptap/extension-placeholder';

interface Props {
  placeholder?: string;
}
const Editor: React.FC<Props> = ({ placeholder }) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder: placeholder,
      }),
    ],
    injectCSS: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <Container>
      <EditorContent editor={editor} />
    </Container>
  );
};

export default Editor;
