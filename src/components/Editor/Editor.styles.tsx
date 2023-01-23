import styled from 'styled-components';

import { EditorContent as Editor } from '@tiptap/react';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const EditorContent = styled(Editor)`
  width: 100%;
  height: 100%;

  .ProseMirror:focus {
    outline: none;
  }

  .ProseMirror {
    background: none;
    line-height: 2;

    blockquote {
      margin: 0;
      margin-left: 20px;
      margin-bottom: 10px;
      font-size: 15px;

      border-left-color: ${({ theme }) => theme.colors.violet6};
      border-left-width: 4px;
      border-left-style: solid;
      padding-left: 16px;
    }

    pre {
      width: 100%;
      background: ${({ theme }) => theme.colors.mauve4};
      border-radius: 0.5rem;
      color: #fff;
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      margin: 12px 0px;
      white-space: pre;
      overflow-x: auto;
    }

    code {
      width: 100%;
      background: ${({ theme }) => theme.colors.mauve4};
      color: inherit;
      font-size: 0.8rem;
      padding: 3px;
      border-radius: 3px;
      white-space: pre;
      overflow-x: auto;

      ::selection {
        background-color: ${({ theme }) => theme.colors.mauve8};
      }
    }

    .is-editor-empty:first-child::before,
    .is-empty:first-child::before {
      color: ${({ theme }) => theme.colors.mauve11};
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    .hljs-comment,
    .hljs-quote {
      color: blue;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }
`;
