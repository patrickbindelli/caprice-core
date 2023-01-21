import React, { useState } from 'react';
import { Container } from './NavbarButton.styles';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Container selected={selected} onClick={() => setSelected((e) => !e)}>
      {children}
    </Container>
  );
};

export default Button;
