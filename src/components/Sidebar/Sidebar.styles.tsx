import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const NavbarWrapper = styled.div`
  position: relative;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const StickyWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const MobileNavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform 250ms ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarCloseArea = styled.div`
  flex: 1;
`;

export const SidebarButton = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 30px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ResizeHandle = styled.div`
  width: 6px;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;

  cursor: e-resize;

  ::before {
    content: '';
    display: block;
    height: 100%;
    width: 1px;
    transition: width 250ms ease-in-out, background-color 250ms ease-in-out;
    background: ${({ theme }) => theme.colors.primary.main}70;
  }

  :hover::before {
    content: '';
    display: block;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 100px;
`;
