import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Container, EditorContent } from './Editor.styles';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import py from 'highlight.js/lib/languages/python';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { lowlight } from 'lowlight/lib/core';

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Underline from '@tiptap/extension-underline';
import 'tippy.js/animations/shift-toward.css';

import Placeholder from '@tiptap/extension-placeholder';
import { BubbleMenu } from '../BubbleMenu';

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Editor = () => {
  lowlight.registerLanguage('html', html);
  lowlight.registerLanguage('css', css);
  lowlight.registerLanguage('javascript', js);
  lowlight.registerLanguage('typescript', ts);
  lowlight.registerLanguage('python', py);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        defaultLanguage: 'javascript',
        lowlight,
      }),
      Underline,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            const capitalizedNodeName = capitalizeFirstLetter(node.type.name);
            return `${capitalizedNodeName} ${node.attrs?.level}`;
          }

          if (node.type.name === 'paragraph') {
            return `/ for commands`;
          }

          return '';
        },
      }),
    ],
  });

  return (
    <Container>
      {editor && <BubbleMenu editor={editor} />}

      <EditorContent editor={editor} />
    </Container>
  );
};

export default Editor;
