import React, { useState } from 'react';

import { Container, Icon, TextWrapper, Text } from './NavbarButton.styles';

interface ButtonProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, icon }) => {
  const [selected, setSelected] = useState(false);

  return (
    <Container selected={selected} onClick={() => setSelected((e) => !e)}>
      <Icon>{icon}</Icon>
      <TextWrapper>
        <Text>{children}</Text>
      </TextWrapper>
    </Container>
  );
};

export default Button;
