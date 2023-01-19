import React from 'react';
import {
  Container,
  NavigationWrapper,
  TitleWrapper,
  OptionsWrapper,
  Button,
  MobileButton,
  Title,
} from './EditorHeader.styles';
import {
  GrLinkPrevious,
  GrLinkNext,
  GrMore,
  GrEdit,
  GrMenu,
} from 'react-icons/gr';

interface props {
  title: string;
  mobileClick: () => void;
}

const EditorHeader: React.FC<props> = ({ title, mobileClick }) => {
  const ICON_SIZE = 18;

  return (
    <Container>
      <NavigationWrapper>
        <MobileButton onClick={mobileClick}>
          <GrMenu size={ICON_SIZE} />
        </MobileButton>
        <Button aria-label="previous">
          <GrLinkPrevious size={ICON_SIZE} />
        </Button>
        <Button aria-label="next">
          <GrLinkNext size={ICON_SIZE} />
        </Button>
      </NavigationWrapper>
      <TitleWrapper>
        <Title placeholder="Untitled">{title}</Title>
      </TitleWrapper>
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
