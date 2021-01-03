import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View testID="container" style={styles.container}>
      <Text style={styles.title}>Hello dev.js</Text>
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
    color: '#333',
  },
});

export default App;
