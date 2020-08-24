import * as React from 'react';
import { Text } from 'react-native';

export const Heading = ({ children }) => {
  return (
    <Text style={{marginBottom:5, fontSize:22, color: '#aaa'}}>
      {children}
    </Text>
  );
}