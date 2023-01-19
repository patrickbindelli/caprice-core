import React from 'react';
import { Container, Title } from './Navbar.styles';
import { Button } from '../Button';
import { GrDocumentText, GrSearch } from 'react-icons/gr';
interface Props {
  width: number;
}

const Navbar: React.FC<Props> = ({ width }) => {
  const ICON_SIZE = 20;
  return (
    <Container width={width}>
      <Title>Caprice</Title>
      <Button>
        <GrSearch size={ICON_SIZE} />
        Pesquisar
      </Button>
      <Button>
        <GrDocumentText size={ICON_SIZE} />
        Novo Documento
      </Button>
    </Container>
  );
};

export default Navbar;
