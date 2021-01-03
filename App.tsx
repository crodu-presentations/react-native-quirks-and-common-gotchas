import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './styles/fonts';

const App = () => {
  return (
    <View testID="container" style={styles.container}>
      <Text style={[styles.title, Typography.h1]}>Hello dev.js</Text>
      <Text style={[styles.title, Typography.h2]}>Czy to jest pogrubione?</Text>
      <Text style={[styles.body, Typography.body]}>Zażółć gęślą jaźń</Text>
      <Text style={[styles.body, Typography.bodyStrong]}>
        Pogrubione: Zażółć gęślą jaźń
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'JosefinSans-Light',
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  body: {
    fontFamily: 'monospace',
    fontSize: 18,
    color: '#333',
  },
});

export default App;
