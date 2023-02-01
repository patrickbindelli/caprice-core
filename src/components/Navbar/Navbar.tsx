import React from 'react';

import {
  FilePlusIcon,
  FileTextIcon,
  GearIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';

import { NavbarButton } from '../NavbarButton';
import { Container, Content, Footer, Header, Title } from './Navbar.styles';
import { useUser } from '@supabase/auth-helpers-react';

interface Props {
  width: number;
}

const documents = [
  {
    title: 'Conceitos Básicos em Gerência de Projetos',
  },
];

const Navbar: React.FC<Props> = ({ width }) => {
  const user = useUser();

  return (
    <Container width={width}>
      <Header>
        <Title>{user?.user_metadata.name}</Title>
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
