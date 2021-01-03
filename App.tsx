import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  let myText = 'hello world';
  myText = '';

  let myValue = 5;
  myValue = 0;

  return (
    <View testID="container" style={styles.container}>
      <Text style={styles.title}>Hello dev.js</Text>
      {!!myText && <Text style={styles.description}>{myText}</Text>}
      {!!myValue && <Text style={styles.description}>{myValue}</Text>}
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
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
  },
});

export default App;
