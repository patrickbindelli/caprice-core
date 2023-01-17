import React from 'react';
import { GrDocumentText, GrSearch } from 'react-icons/gr';
import Button from '../Button/Button';
import {
  Wrapper,
  Navbar,
  Title,
  ResizeHandle,
  Content,
} from './Sidebar.styles';

const ICON_SIZE = 20;

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <Wrapper>
      <Navbar>
        <Title>Caprice</Title>
        <Button>
          <GrSearch size={ICON_SIZE} />
          Pesquisar
        </Button>
        <Button>
          <GrDocumentText size={ICON_SIZE} />
          Novo Documento
        </Button>
        <ResizeHandle />
      </Navbar>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Sidebar;
