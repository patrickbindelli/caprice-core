import React from 'react';

import {
  LexicalComposer,
  InitialConfigType,
} from '@lexical/react/LexicalComposer';

import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import CodeHighlightPlugin from './plugins/CodeHighlightPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';

import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';

import { themeMappings as theme } from '@/styles/Themes/LexicalThemeWrapper';

import {
  Container,
  EditorInner,
  Placeholder,
  TextInput,
  DocumentTitle,
  TitlePlaceholder,
} from './Editor.styles';

function onError(error: Error) {
  console.error(error);
}

interface EditorProps {
  fullscreen: boolean;
  width: number;
}

export const Editor: React.FC<EditorProps> = ({ fullscreen, width }) => {
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
    <>
      <Container>
        <LexicalComposer initialConfig={initialConfig}>
          <DocumentTitle width={fullscreen ? undefined : width}>
            <PlainTextPlugin
              contentEditable={<TextInput />}
              placeholder={<TitlePlaceholder>Untitled</TitlePlaceholder>}
              ErrorBoundary={LexicalErrorBoundary}
            />
          </DocumentTitle>
          <HistoryPlugin />
        </LexicalComposer>
        <LexicalComposer initialConfig={initialConfig}>
          <EditorInner width={fullscreen ? undefined : width}>
            <RichTextPlugin
              contentEditable={<TextInput />}
              placeholder={<Placeholder>Enter some text...</Placeholder>}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <CheckListPlugin />
            <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
            <CodeHighlightPlugin />
          </EditorInner>
          <HistoryPlugin />
        </LexicalComposer>
      </Container>
    </>
  );
};

export default Editor;
