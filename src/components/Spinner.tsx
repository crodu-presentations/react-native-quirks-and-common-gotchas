import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const Spinner = () => {
  // we animate four elements, so each of them has its own spin value
  // here, spins is an array of four Animated.Values
  const spins = useRef(Array.from(new Array(4), () => new Animated.Value(0)))
    .current;

  useEffect(() => {
    // on mount, let's start a looping animation of spins values
    Animated.loop(
      // stagger starts animations in order and in parallel, but with successive delays
      Animated.stagger(
        120,
        spins.map((spin) =>
          Animated.timing(spin, {
            toValue: 360,
            duration: 1200,
            easing: Easing.bezier(0.5, 0, 0.5, 1),
            useNativeDriver: false, // see https://github.com/facebook/react-native/issues/28517
          }),
        ),
      ),
    ).start();
  }, [spins]);

  const rotation = (spin: Animated.Value) => ({
    transform: [
      {
        rotate: spin.interpolate({
          inputRange: [0, 360],
          outputRange: ['0deg', '360deg'],
        }),
      },
    ],
  });

  return (
    <View style={styles.container} pointerEvents="none">
      {spins.map((spin, index) => (
        <Animated.View key={index} style={[styles.element, rotation(spin)]} />
      ))}
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
  },
});
