import React from 'react';
import { Button, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LottieSpinner } from './components/LottieSpinner';
import { Spinner } from './components/Spinner';
import { SpinnerNative } from './components/SpinnerNative';
import { actBusy } from './utils/actBusy';

const App = () => {
  return (
    <View testID="container" style={styles.container}>
      <View style={styles.spinnerWrapper}>
        <Spinner />
        <SpinnerNative />
        <LottieSpinner />
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
