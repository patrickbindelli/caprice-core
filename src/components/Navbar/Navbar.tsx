import React from 'react';
import { GrAdd, GrDocumentText, GrPerformance, GrSearch } from 'react-icons/gr';
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
            <NavbarButton
              key={index}
              icon={<GrDocumentText size={ICON_SIZE} />}
            >
              {document.title}
            </NavbarButton>
          );
        })}
      </Content>
      <Footer>
        <NavbarButton icon={<GrAdd size={ICON_SIZE} />}>
          Nova Pagina
        </NavbarButton>
        <NavbarButton icon={<GrSearch size={ICON_SIZE} />}>
          Pesquisar
        </NavbarButton>
        <NavbarButton icon={<GrPerformance size={ICON_SIZE} />}>
          Configurações
        </NavbarButton>
      </Footer>
    </Container>
  );
};

export default Navbar;
