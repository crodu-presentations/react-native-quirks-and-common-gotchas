import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello dev.js</Text>
      <Text style={styles.description}>
        Na razie nic tu ciekawego nie ma....
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
