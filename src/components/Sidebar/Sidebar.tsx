import React from 'react';
import { GrDocumentText, GrSearch } from 'react-icons/gr';
import Button from '../Button/Button';
import {
  Content,
  Navbar,
  ResizeHandle,
  Title,
  Wrapper,
} from './Sidebar.styles';

import useResize from '@/hooks/useResize';

const ICON_SIZE = 20;

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const { width, startResizing } = useResize(200, 500);

  return (
    <Wrapper>
      <Navbar width={width}>
        <Title>Caprice</Title>
        <Button>
          <GrSearch size={ICON_SIZE} />
          Pesquisar
        </Button>
        <Button>
          <GrDocumentText size={ICON_SIZE} />
          Novo Documento
        </Button>
        <ResizeHandle onMouseDown={startResizing} />
      </Navbar>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Sidebar;
