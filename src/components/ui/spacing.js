import * as React from 'react';
import { View } from 'react-native';

export const Padder = ({ children }) => {
  return (
    <View style={{margin:5}}>
      {children}
    </View>
  );
}

export const SidePadder = ({ children }) => {
  return (
    <View style={{marginLeft:5, marginRight:5}}>
      {children}
    </View>
  );
}

export const TopPadder = ({ children }) => {
  return (
    <View style={{marginTop:5}}>
      {children}
    </View>
  );
}

export const SmallSpacer = () => {
  return (
    <View style={{height:10}}/>
  );
}

export const GoldenPadder = ({ children }) => {
  return (
    <View style={{width:'61%',marginTop:5}}>
      {children}
    </View>
  );
}