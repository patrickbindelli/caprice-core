import React from 'react';

import {
  FilePlusIcon,
  FileTextIcon,
  GearIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

import { NavbarButton } from '../NavbarButton';
import { Container, Content, Footer, Header, Title } from './Navbar.styles';
interface Props {
  width: number;
}

const documents = [
  {
    title: 'Conceitos Básicos em Gerência de Projetos',
  },
];

const Navbar: React.FC<Props> = ({ width }) => {
  const ICON_SIZE = 20;
  return (
    <Container width={width}>
      <Header>
        <Title>Caprice</Title>
      </Header>
      <Content>
        {documents.map((document, index) => {
          return (
            <NavbarButton key={index} icon={<FileTextIcon />}>
              {document.title}
            </NavbarButton>
          );
        })}
      </Content>
      <Footer>
        <NavbarButton icon={<FilePlusIcon />}>Nova Pagina</NavbarButton>
        <NavbarButton icon={<MagnifyingGlassIcon />}>Pesquisar</NavbarButton>
        <NavbarButton icon={<GearIcon />}>Configurações</NavbarButton>
      </Footer>
    </Container>
  );
};

export default Navbar;
