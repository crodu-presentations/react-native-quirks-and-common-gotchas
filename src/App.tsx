import React from 'react';
import { Button, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { LottieSpinner } from './LottieSpinner';
import { Spinner } from './Spinner';
import { SpinnerNative } from './SpinnerNative';

const App = () => {
  return (
    <View testID="container" style={styles.container}>
      <View style={styles.spinnerWrapper}>
        <Spinner />
        <SpinnerNative />
        <LottieSpinner />
      </View>
      <Button
        testID="button.spam_js_thread"
        title="Spam JS Thread"
        onPress={actBusy}
      />
    </View>
  );
};

function actBusy() {
  setTimeout(() => {
    actBusyFor(8000);
  }, 0);
}

function actBusyFor(milliseconds: number) {
  const start = new Date().getTime();
  let i;
  for (i = 0; i < 1e8; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
  return i;
}

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
