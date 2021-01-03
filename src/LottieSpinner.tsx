import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Does not work on Android Emulator
// though works like a charm on Android device and iOS (simulator & device)
// https://github.com/lottie-react-native/lottie-react-native/issues/690

export const LottieSpinner = () => {
  return (
    <View style={styles.container}>
      <LottieView source={require('./lottie_spinner.json')} loop autoPlay />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    position: 'relative',
    width: 80,
    height: 80,
  },
});
