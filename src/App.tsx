import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const myText = '';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      {/* we dont want to show the component below if `myText` is empty */}
      {myText && (
        <Text style={styles.description}>Hi, the message is: "{myText}"</Text>
      )}
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
