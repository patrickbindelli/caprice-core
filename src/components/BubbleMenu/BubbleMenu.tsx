import React from 'react';
import { Container, BubbleMenuButton } from './BubbleMenu.styles';

import {
  CodeIcon,
  FontBoldIcon,
  FontItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from '@radix-ui/react-icons';
import { Editor } from '@tiptap/react';

interface Props {
  editor: Editor;
}

const BubbleMenu: React.FC<Props> = ({ editor }) => {
  return (
    <Container
      updateDelay={0}
      tippyOptions={{
        arrow: true,
        placement: 'auto',
        animation: 'shift-toward',
        duration: [500, 0],
        moveTransition: 'transform 250ms 100ms ease-in-out',
        offset: [0, 20],
      }}
      editor={editor}
    >
      <BubbleMenuButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        selected={editor.isActive('bold')}
      >
        <FontBoldIcon />
      </BubbleMenuButton>
      <BubbleMenuButton
        onClick={() => editor.chain().focus().toggleItalic().run()}
        selected={editor.isActive('italic')}
      >
        <FontItalicIcon />
      </BubbleMenuButton>
      <BubbleMenuButton
        onClick={() => editor.chain().focus().toggleStrike().run()}
        selected={editor.isActive('strike')}
      >
        <StrikethroughIcon />
      </BubbleMenuButton>
      <BubbleMenuButton
        onClick={() => editor.chain().focus().toggleCode().run()}
        selected={editor.isActive('code')}
      >
        <CodeIcon />
      </BubbleMenuButton>
      <BubbleMenuButton
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        selected={editor.isActive('underline')}
      >
        <UnderlineIcon />
      </BubbleMenuButton>
    </Container>
  );
};

export default BubbleMenu;
