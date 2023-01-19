import React, { useEffect, useRef, useCallback } from 'react';

import {
  Content,
  MobileNavbarWrapper,
  NavbarCloseArea,
  NavbarWrapper,
  ResizeHandle,
  Wrapper,
} from './Sidebar.styles';

import useResize from '@/hooks/useResize';

import { Navbar } from '../Navbar';
interface SidebarProps {
  children: React.ReactNode;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileWidth: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  children,
  mobileOpen,
  setMobileOpen,
  mobileWidth,
}) => {
  const { width, startResizing } = useResize(200, 500);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const openSidebar = () => {
    sidebarRef.current!.style.transform = 'translateX(0)';
  };

  const closeSidebar = useCallback(() => {
    setMobileOpen(false);
    sidebarRef.current!.style.transform = 'translateX(-100%)';
  }, [setMobileOpen]);

  useEffect(() => {
    window.addEventListener('resize', closeSidebar);

    return () => {
      window.removeEventListener('resize', closeSidebar);
    };
  }, [closeSidebar]);

  useEffect(() => {
    if (mobileOpen) openSidebar();
  }, [mobileOpen]);

  return (
    <Wrapper>
      <MobileNavbarWrapper ref={sidebarRef}>
        <Navbar width={mobileWidth} />
        <NavbarCloseArea onClick={closeSidebar} />
      </MobileNavbarWrapper>
      <NavbarWrapper>
        <Navbar width={width} />
        <ResizeHandle onMouseDown={startResizing} />
      </NavbarWrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Sidebar;
