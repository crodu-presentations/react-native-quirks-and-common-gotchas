import React from 'react';
import { Button, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Spinner } from './components/Spinner';
import { SpinnerNative } from './components/SpinnerNative';
import { actBusy } from './utils/actBusy';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerWrapper}>
        <Spinner />
        <SpinnerNative />
      </View>
      <Button title="Spam JS Thread" onPress={actBusy} />
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
    marginBottom: 48,
  },
});

export default App;
