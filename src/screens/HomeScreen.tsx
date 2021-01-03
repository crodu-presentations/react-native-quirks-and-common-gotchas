import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { HomeStackParams } from '../navigation/navigatorParams';
import { Routes } from '../navigation/Routes';
import { Typography } from '../styles/fonts';

type NavigationProp = StackNavigationProp<HomeStackParams, Routes.Home>;

interface Props {
  navigation: NavigationProp;
}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View testID="container" style={styles.container}>
      <Text style={[styles.text, Typography.h1]}>Hello, Home Screen</Text>
      <TouchableOpacity
        testID="btn.go_to_chart.100"
        style={styles.button}
        onPress={() => {
          console.log('NAV TEST: button pressed');
          navigation.push(Routes.Chart, { maxPoints: 100 });
        }}>
        <Text>Chart with 100 points</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="btn.go_to_chart.1000"
        style={styles.button}
        onPress={() => {
          console.log('NAV TEST: button pressed');
          navigation.push(Routes.Chart, { maxPoints: 1000 });
        }}>
        <Text>Chart with 1000 points</Text>
      </TouchableOpacity>
      <TouchableOpacity
        testID="btn.go_to_chart.10000"
        style={styles.button}
        onPress={() => {
          console.log('NAV TEST: button pressed');
          navigation.push(Routes.Chart, { maxPoints: 10000 });
        }}>
        <Text>Chart with 10000 points</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    minWidth: 200,
    margin: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 3,
    alignItems: 'center',
  },
});
