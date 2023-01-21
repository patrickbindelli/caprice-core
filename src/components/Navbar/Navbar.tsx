import React from 'react';
import { Container, Title } from './Navbar.styles';
import { NavbarButton } from '../NavbarButton';
import { GrDocumentText, GrSearch } from 'react-icons/gr';
interface Props {
  width: number;
}

const Navbar: React.FC<Props> = ({ width }) => {
  const ICON_SIZE = 20;
  return (
    <Container width={width}>
      <Title>Caprice</Title>
      <NavbarButton>
        <GrSearch size={ICON_SIZE} />
        Pesquisar
      </NavbarButton>
      <NavbarButton>
        <GrDocumentText size={ICON_SIZE} />
        Novo Documento
      </NavbarButton>
    </Container>
  );
};

export default Navbar;
