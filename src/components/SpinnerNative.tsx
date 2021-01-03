import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const SpinnerNative = () => {
  const spins = useRef(Array.from(new Array(4), () => new Animated.Value(0)))
    .current;

  useEffect(() => {
    function animateOneFullRotation() {
      spins.forEach((spin) => spin.setValue(0));
      Animated.stagger(
        120,
        spins.map((spin) =>
          Animated.timing(spin, {
            toValue: 360,
            duration: 1200,
            easing: Easing.bezier(0.5, 0, 0.5, 1),
            useNativeDriver: true,
          }),
        ),
      ).start(({ finished }) => {
        if (finished) {
          animateOneFullRotation();
        }
      });
    }
    animateOneFullRotation();
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
