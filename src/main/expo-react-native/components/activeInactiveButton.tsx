import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';

interface ButtonProps {
  isActive: boolean;
}

const Button = styled(TouchableHighlight)<ButtonProps>`
  background-color: ${({ isActive }) => isActive ? '#ff0000' : '#00ff00'};
  padding: 10px;
  margin-top: 40px;
  border-radius: 5px;
`;

const Text = styled.Text `
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
`;

const MyComponent: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleButtonPress = () => {
    setIsActive(!isActive);
  };

  return (
    <Button isActive={isActive} onPress={handleButtonPress}>
      <Text>{isActive ? 'Inactive' : 'Active'}</Text>
    </Button>
  );
};

export default MyComponent;
