import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { RootStackParams } from '../navigation/RootStackParams';
import { Routes } from '../navigation/Routes';
import { Typography } from '../styles/fonts';

type NavigationProp = StackNavigationProp<RootStackParams, Routes.Home>;

interface Props {
  navigation: NavigationProp;
}

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
