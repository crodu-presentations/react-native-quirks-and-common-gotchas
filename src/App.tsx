import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Spinner } from './Spinner';
import { SpinnerNative } from './SpinnerNative';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerWrapper}>
        <Spinner />
        <SpinnerNative />
      </View>
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
  spinnerWrapper: {
    flexDirection: 'row',
    margin: 24,
  },
});

export default App;
