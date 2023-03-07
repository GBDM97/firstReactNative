import React from 'react'
import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    
    onPress?: () => void;
  }

const Login = styled(TouchableOpacity)`
border: 2px solid transparent;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
    background-color: #0087FF;
    color: black;
    padding: 10px;
    font-weight: 500;
`;

// const SecondaryButton = styled.button`
//   color: white;
//   background-color: black;
//   border: 2px solid white;
//   border-radius: 4px;
//   padding: 10px;
//   font-size: 16px;
//   cursor: pointer;
//   font-weight: 500;
// `;

const Textt = styled(Text)`
  color: 'red';

  &:hover {
    color: 'blue';
  }
`

export function StyledButton ({onPress}:ButtonProps) {

    return(
    <>
    <Login onPress={onPress}>
        <Textt>Login</Textt>
    </Login>
    </>
    )
}

export default StyledButton