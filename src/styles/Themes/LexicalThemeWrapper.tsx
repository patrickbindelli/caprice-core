import styled from 'styled-components';

import type { EditorThemeClasses } from 'lexical';

export const themeMappings: EditorThemeClasses = {
  blockCursor: 'Editor__blockCursor',
  characterLimit: 'Editor__characterLimit',
  code: 'Editor__code',
  codeHighlight: {
    atrule: 'Editor__tokenAttr',
    attr: 'Editor__tokenAttr',
    boolean: 'Editor__tokenProperty',
    builtin: 'Editor__tokenSelector',
    cdata: 'Editor__tokenComment',
    char: 'Editor__tokenSelector',
    class: 'Editor__tokenFunction',
    'class-name': 'Editor__tokenFunction',
    comment: 'Editor__tokenComment',
    constant: 'Editor__tokenProperty',
    deleted: 'Editor__tokenProperty',
    doctype: 'Editor__tokenComment',
    entity: 'Editor__tokenOperator',
    function: 'Editor__tokenFunction',
    important: 'Editor__tokenVariable',
    inserted: 'Editor__tokenSelector',
    keyword: 'Editor__tokenAttr',
    namespace: 'Editor__tokenVariable',
    number: 'Editor__tokenProperty',
    operator: 'Editor__tokenOperator',
    prolog: 'Editor__tokenComment',
    property: 'Editor__tokenProperty',
    punctuation: 'Editor__tokenPunctuation',
    regex: 'Editor__tokenVariable',
    selector: 'Editor__tokenSelector',
    string: 'Editor__tokenSelector',
    symbol: 'Editor__tokenProperty',
    tag: 'Editor__tokenProperty',
    url: 'Editor__tokenOperator',
    variable: 'Editor__tokenVariable',
  },
  embedBlock: {
    base: 'Editor__embedBlock',
    focus: 'Editor__embedBlockFocus',
  },
  hashtag: 'Editor__hashtag',
  heading: {
    h1: 'Editor__h1',
    h2: 'Editor__h2',
    h3: 'Editor__h3',
    h4: 'Editor__h4',
    h5: 'Editor__h5',
    h6: 'Editor__h6',
  },
  image: 'editor-image',
  link: 'Editor__link',
  list: {
    listitem: 'Editor__listItem',
    listitemChecked: 'Editor__listItemChecked',
    listitemUnchecked: 'Editor__listItemUnchecked',
    nested: {
      listitem: 'Editor__nestedListItem',
    },
    olDepth: [
      'Editor__ol1',
      'Editor__ol2',
      'Editor__ol3',
      'Editor__ol4',
      'Editor__ol5',
    ],
    ul: 'Editor__ul',
  },
  ltr: 'Editor__ltr',
  mark: 'Editor__mark',
  markOverlap: 'Editor__markOverlap',
  paragraph: 'Editor__paragraph',
  quote: 'Editor__quote',
  rtl: 'Editor__rtl',
  table: 'Editor__table',
  tableAddColumns: 'Editor__tableAddColumns',
  tableAddRows: 'Editor__tableAddRows',
  tableCell: 'Editor__tableCell',
  tableCellActionButton: 'Editor__tableCellActionButton',
  tableCellActionButtonContainer: 'Editor__tableCellActionButtonContainer',
  tableCellEditing: 'Editor__tableCellEditing',
  tableCellHeader: 'Editor__tableCellHeader',
  tableCellPrimarySelected: 'Editor__tableCellPrimarySelected',
  tableCellResizer: 'Editor__tableCellResizer',
  tableCellSelected: 'Editor__tableCellSelected',
  tableCellSortedIndicator: 'Editor__tableCellSortedIndicator',
  tableResizeRuler: 'Editor__tableCellResizeRuler',
  tableSelected: 'Editor__tableSelected',
  text: {
    bold: 'Editor__textBold',
    code: 'Editor__textCode',
    italic: 'Editor__textItalic',
    strikethrough: 'Editor__textStrikethrough',
    subscript: 'Editor__textSubscript',
    superscript: 'Editor__textSuperscript',
    underline: 'Editor__textUnderline',
    underlineStrikethrough: 'Editor__textUnderlineStrikethrough',
  },
};

const LexicalThemeWrapper = styled.div`
  .Editor__ltr {
    text-align: left;
  }
  .Editor__rtl {
    text-align: right;
  }
  .Editor__paragraph {
    margin: 0;
    position: relative;
    color: ${({ theme }) => theme.lexical.text.colors.paragraph};
  }
  .Editor__quote {
    margin: 0;
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 15px;
    color: ${({ theme }) => theme.lexical.quote.text};
    border-left-color: ${({ theme }) => theme.lexical.quote.border};
    border-left-width: 4px;
    border-left-style: solid;
    padding-left: 16px;
  }
  .Editor__h1 {
    color: ${({ theme }) => theme.lexical.text.colors.h1};
    font-size: 24px;
    font-weight: 400;
    margin: 0;
  }
  .Editor__h2 {
    color: ${({ theme }) => theme.lexical.text.colors.h2};
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
  .Editor__h3 {
    color: ${({ theme }) => theme.lexical.text.colors.h3};
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
  }
  .Editor__h4 {
    color: ${({ theme }) => theme.lexical.text.colors.h4};
  }
  .Editor__h5 {
    color: ${({ theme }) => theme.lexical.text.colors.h5};
  }
  .Editor__h6 {
    color: ${({ theme }) => theme.lexical.text.colors.h6};
  }
  .Editor__textBold {
    font-weight: bold;
  }
  .Editor__textItalic {
    font-style: italic;
  }
  .Editor__textUnderline {
    text-decoration: underline;
  }
  .Editor__textStrikethrough {
    text-decoration: line-through;
  }
  .Editor__textUnderlineStrikethrough {
    text-decoration: underline line-through;
  }
  .Editor__textSubscript {
    font-size: 0.8em;
    vertical-align: sub !important;
  }
  .Editor__textSuperscript {
    font-size: 0.8em;
    vertical-align: super;
  }
  .Editor__textCode {
    background-color: ${({ theme }) => theme.lexical.codeBlock.main};
    color: ${({ theme }) => theme.lexical.codeBlock.contrastText};
    padding: 1px 0.25rem;
    font-family: Menlo, Consolas, Monaco, monospace;
    font-size: 94%;
  }
  .Editor__hashtag {
    background-color: rgba(88, 144, 255, 0.15);
    border-bottom: 1px solid rgba(88, 144, 255, 0.3);
  }
  .Editor__link {
    color: rgb(33, 111, 219);
    text-decoration: none;
  }
  .Editor__link:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  .Editor__code {
    background-color: ${({ theme }) => theme.lexical.codeBlock.main};
    color: ${({ theme }) => theme.lexical.codeBlock.contrastText};
    font-family: Menlo, Consolas, Monaco, monospace;

    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 34px 16px 32px 32px;

    white-space: nowrap;
    font-size: 13px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    tab-size: 2;

    * {
      ::selection {
        background: ${({ theme }) => theme.lexical.codeBlock.selection.main};
        color: ${({ theme }) => theme.lexical.codeBlock.selection.contrastText};
      }
    }
    overflow: auto;
  }

  .Editor__table {
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
    overflow-y: scroll;
    table-layout: fixed;
    width: 100%;
    margin: 30px 0;
  }
  .Editor__tableSelected {
    outline: 2px solid rgb(60, 132, 244);
  }
  .Editor__tableCell {
    border: 1px solid #bbb;
    min-width: 75px;
    vertical-align: top;
    text-align: start;
    padding: 6px 8px;
    position: relative;
    cursor: default;
    outline: none;
  }
  .Editor__tableCellSortedIndicator {
    display: block;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #999;
  }
  .Editor__tableCellResizer {
    position: absolute;
    right: -4px;
    height: 100%;
    width: 8px;
    cursor: ew-resize;
    z-index: 10;
    top: 0;
  }
  .Editor__tableCellHeader {
    background-color: #383b42;
    text-align: start;
  }
  .Editor__tableCellSelected {
    background-color: #c9dbf0;
  }
  .Editor__tableCellPrimarySelected {
    border: 2px solid rgb(60, 132, 244);
    display: block;
    height: calc(100% - 2px);
    position: absolute;
    width: calc(100% - 2px);
    left: -1px;
    top: -1px;
    z-index: 2;
  }
  .Editor__tableCellEditing {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
  }
  .Editor__tableAddColumns {
    position: absolute;
    top: 0;
    width: 20px;
    background-color: #eee;
    height: 100%;
    right: 0;
    animation: table-controls 0.2s ease;
    border: 0;
    cursor: pointer;
  }
  .Editor__tableAddColumns:after {
    background-image: url(../images/icons/plus.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
  .Editor__tableAddColumns:hover {
    background-color: #c9dbf0;
  }
  .Editor__tableAddRows {
    position: absolute;
    bottom: -25px;
    width: calc(100% - 25px);
    background-color: #eee;
    height: 20px;
    left: 0;
    animation: table-controls 0.2s ease;
    border: 0;
    cursor: pointer;
  }
  .Editor__tableAddRows:after {
    background-image: url(../images/icons/plus.svg);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
  .Editor__tableAddRows:hover {
    background-color: #c9dbf0;
  }
  @keyframes table-controls {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .Editor__tableCellResizeRuler {
    display: block;
    position: absolute;
    width: 1px;
    background-color: rgb(60, 132, 244);
    height: 100%;
    top: 0;
  }
  .Editor__tableCellActionButtonContainer {
    display: block;
    right: 5px;
    top: 6px;
    position: absolute;
    z-index: 4;
    width: 20px;
    height: 20px;
  }
  .Editor__tableCellActionButton {
    background-color: #eee;
    display: block;
    border: 0;
    border-radius: 20px;
    width: 20px;
    height: 20px;
    color: #222;
    cursor: pointer;
  }
  .Editor__tableCellActionButton:hover {
    background-color: #ddd;
  }
  .Editor__characterLimit {
    display: inline;
    background-color: #ffbbbb !important;
  }
  .Editor__ol1 {
    padding: 0;
    margin: 0;
    margin-left: 16px;
    list-style-position: inside;
  }
  .Editor__ol2 {
    padding: 0;
    margin: 0;
    margin-left: 16px;
    list-style-type: upper-alpha;
    list-style-position: inside;
  }
  .Editor__ol3 {
    padding: 0;
    margin: 0;
    margin-left: 16px;
    list-style-type: lower-alpha;
    list-style-position: inside;
  }
  .Editor__ol4 {
    padding: 0;
    margin: 0;
    margin-left: 16px;
    list-style-type: upper-roman;
    list-style-position: inside;
  }
  .Editor__ol5 {
    padding: 0;
    margin: 0;
    margin-left: 16px;
    list-style-type: lower-roman;
    list-style-position: inside;
  }
  .Editor__ul {
    padding: 0;
    margin: 0;
    margin-left: 16px;
    list-style-position: inside;
  }
  .Editor__listItem {
    margin: 0 32px;
  }
  .Editor__listItemChecked,
  .Editor__listItemUnchecked {
    position: relative;
    padding-left: 30px;
    list-style-type: none;
    outline: none;
  }
  .Editor__listItemChecked {
    text-decoration: line-through;
  }
  .Editor__listItemUnchecked:before,
  .Editor__listItemChecked:before {
    content: '[   ]';
    width: 25px;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .Editor__listItemUnchecked[dir='rtl']:before,
  .Editor__listItemChecked[dir='rtl']:before {
    left: auto;
    right: 0;
  }

  .Editor__listItemChecked:after {
    content: 'x';
    cursor: pointer;
    position: absolute;
    display: block;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 25px;
    left: 0;
    top: 0;
  }
  .Editor__nestedListItem {
    list-style-type: none;
  }
  .Editor__nestedListItem:before,
  .Editor__nestedListItem:after {
    display: none;
  }
  .Editor__tokenComment {
    color: ${({ theme }) => theme.lexical.codeHighlight.comment};
  }
  .Editor__tokenPunctuation {
    color: ${({ theme }) => theme.lexical.codeHighlight.ponctuation};
  }
  .Editor__tokenProperty {
    color: ${({ theme }) => theme.lexical.codeHighlight.property};
  }
  .Editor__tokenSelector {
    color: ${({ theme }) => theme.lexical.codeHighlight.selector};
  }
  .Editor__tokenOperator {
    color: ${({ theme }) => theme.lexical.codeHighlight.operator};
  }
  .Editor__tokenAttr {
    color: ${({ theme }) => theme.lexical.codeHighlight.attr};
  }
  .Editor__tokenVariable {
    color: ${({ theme }) => theme.lexical.codeHighlight.variable};
  }
  .Editor__tokenFunction {
    color: ${({ theme }) => theme.lexical.codeHighlight.function};
  }
  .Editor__mark {
    background: rgba(255, 212, 0, 0.14);
    border-bottom: 2px solid rgba(255, 212, 0, 0.3);
    padding-bottom: 2px;
  }
  .Editor__markOverlap {
    background: rgba(255, 212, 0, 0.3);
    border-bottom: 2px solid rgba(255, 212, 0, 0.7);
  }
  .Editor__mark.selected {
    background: rgba(255, 212, 0, 0.5);
    border-bottom: 2px solid rgba(255, 212, 0, 1);
  }
  .Editor__markOverlap.selected {
    background: rgba(255, 212, 0, 0.7);
    border-bottom: 2px solid rgba(255, 212, 0, 0.7);
  }
  .Editor__embedBlock {
    user-select: none;
  }
  .Editor__embedBlockFocus {
    outline: 2px solid rgb(60, 132, 244);
  }
`;

export default LexicalThemeWrapper;
