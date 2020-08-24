import * as React from 'react';
import { View, SafeAreaView } from 'react-native';

export const Center = ({ children }) => {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      {children}
    </View>
  );
}

export const Container = ({ children }) => {
  return (
    <View style={{
      flex: 1,
      //marginTop: 30,
    }}>
      <SafeAreaView>
      {children}
      </SafeAreaView>
    </View>
  );
}
