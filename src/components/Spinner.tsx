import React from 'react';
import { View, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Spinner = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View style={[styles.element]} />
      <Animated.View style={[styles.element, styles.element1]} />
      <Animated.View style={[styles.element, styles.element2]} />
      <Animated.View style={[styles.element, styles.element3]} />
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
  element: {
    position: 'absolute',
    width: 64,
    height: 64,
    margin: 8,
    borderRadius: 32,
    borderWidth: 8,
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    animation: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
    '@keyframes spin': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
  element1: {
    animationDelay: '-0.45s',
  },
  element2: {
    animationDelay: '-0.3s',
  },
  element3: {
    animationDelay: '-0.15s',
  },
});
