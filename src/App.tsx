import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View testID="container" style={styles.container}>
      <Text style={styles.title}>Hello World! - in JosefinSans-Light</Text>
      <Text style={[styles.title, styles.bold]}>
        This text should be written in JosefinSans-Bold font...
      </Text>
      <Text style={styles.body}>Here we want the monospaced font</Text>
      <Text style={[styles.body, styles.bold]}>
        And here the font should be monospaced and bold.
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
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  body: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
});

export default App;
