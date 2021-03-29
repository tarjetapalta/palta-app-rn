import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';

export const Home: FunctionComponent = () => {
  console.log('HOME');

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text style={{ color: 'coral' }}>HOME SCREEN</Text>
    </View>
  );
};
