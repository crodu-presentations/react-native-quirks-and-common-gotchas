import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Typography } from '../styles/fonts';

export function HomeScreen() {
  return (
    <View testID="container" style={styles.container}>
      <Text style={Typography.h1}>Home Screen</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
