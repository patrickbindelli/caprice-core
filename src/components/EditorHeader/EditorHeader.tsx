import React from 'react';
import {
  Container,
  NavigationWrapper,
  TitleWrapper,
  OptionsWrapper,
  Button,
} from './EditorHeader.styles';
import { GrLinkPrevious, GrLinkNext, GrMore, GrEdit } from 'react-icons/gr';

interface props {
  title: string;
}
const EditorHeader: React.FC<props> = ({ title }) => {
  const ICON_SIZE = 18;

  return (
    <Container>
      <NavigationWrapper>
        <Button aria-label="previous">
          <GrLinkPrevious size={ICON_SIZE} />
        </Button>
        <Button aria-label="next">
          <GrLinkNext size={ICON_SIZE} />
        </Button>
      </NavigationWrapper>
      <TitleWrapper placeholder="Untitled">{title}</TitleWrapper>
      <OptionsWrapper>
        <Button aria-label="edit">
          <GrEdit size={ICON_SIZE} />
        </Button>
        <Button aria-label="more options">
          <GrMore size={ICON_SIZE} />
        </Button>
      </OptionsWrapper>
    </Container>
  );
};

export default EditorHeader;
