import React from 'react';
import {
  Button,
  Container,
  MobileButton,
  NavigationWrapper,
  OptionsWrapper,
  Title,
  TitleWrapper,
} from './EditorHeader.styles';

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsHorizontalIcon,
  HamburgerMenuIcon,
  Pencil1Icon,
} from '@radix-ui/react-icons';

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
          <HamburgerMenuIcon />
        </MobileButton>
        <Button aria-label="previous">
          <ArrowLeftIcon />
        </Button>
        <Button aria-label="next">
          <ArrowRightIcon />
        </Button>
      </NavigationWrapper>
      <TitleWrapper>
        <Title placeholder="Untitled">{title}</Title>
      </TitleWrapper>
      <OptionsWrapper>
        <Button aria-label="edit">
          <Pencil1Icon />
        </Button>
        <Button aria-label="more options">
          <DotsHorizontalIcon />
        </Button>
      </OptionsWrapper>
    </Container>
  );
};

export default EditorHeader;
