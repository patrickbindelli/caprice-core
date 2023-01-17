import React from 'react';

import {
  LexicalComposer,
  InitialConfigType,
} from '@lexical/react/LexicalComposer';

import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';

import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';

import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

import {
  Container,
  EditorInner,
  Placeholder,
  TextInput,
} from './Editor.styles';

const theme = {
  // Theme styling goes here
};

function onError(error: Error) {
  console.error(error);
}

export const Editor: React.FC = () => {
  const initialConfig: InitialConfigType = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Container>
        <EditorInner>
          <RichTextPlugin
            contentEditable={<TextInput />}
            placeholder={<Placeholder>Enter some text...</Placeholder>}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </EditorInner>
        <HistoryPlugin />
      </Container>
    </LexicalComposer>
  );
};

export default Editor;
