import LottieView from 'lottie-react-native';
import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

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
