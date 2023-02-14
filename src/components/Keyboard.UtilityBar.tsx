import React, {useCallback, useEffect} from 'react';
import {Keyboard, KeyboardEvent, StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const KeyboardUtilityBar = () => {
  const translateYSharedValue = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateYSharedValue.value}],
    };
  });

  const keyboardWillShowHandler = useCallback((event: KeyboardEvent) => {
    translateYSharedValue.value = withTiming(
      -event.endCoordinates.height - 20,
      {
        duration: 300,
        easing: Easing.in(Easing.exp),
      },
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyboardWillHideHandler = useCallback(() => {
    translateYSharedValue.value = withTiming(0, {
      duration: 250,
      easing: Easing.out(Easing.exp),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShowHandler);

    Keyboard.addListener('keyboardWillHide', keyboardWillHideHandler);

    return () => {
      Keyboard.removeAllListeners('keyboardWillShow');
      Keyboard.removeAllListeners('keyboardWillHide');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Animated.View style={[styles.container, animatedStyles]} />;
};

export default React.memo(KeyboardUtilityBar);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    height: 20,
    backgroundColor: 'pink',
  },
});
