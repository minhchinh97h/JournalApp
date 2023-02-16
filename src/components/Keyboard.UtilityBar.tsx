import React, {useCallback, useEffect} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  WithTimingConfig,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import {WINDOW_WIDTH} from '~constants/dimensions';
import {LIGHT_COLORS} from '~constants/styles';

const HEIGHT = 32;

const ANIMATION_CONFIG: WithTimingConfig = {
  duration: 200,
  easing: Easing.inOut(Easing.exp),
};

const KeyboardUtilityBar = () => {
  const containerTranslateYSharedValue = useSharedValue(0);

  const subToolContainerTranslateXSharedValue = useSharedValue(WINDOW_WIDTH);

  const containerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: containerTranslateYSharedValue.value}],
    };
  });

  const subToolContainerAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: subToolContainerTranslateXSharedValue.value}],
      opacity: interpolate(
        subToolContainerTranslateXSharedValue.value,
        [0, WINDOW_WIDTH],
        [1, 0],
        Extrapolation.CLAMP,
      ),
    };
  });

  const keyboardWillShowHandler = useCallback(() => {
    containerTranslateYSharedValue.value = -HEIGHT;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keyboardWillHideHandler = useCallback(() => {
    containerTranslateYSharedValue.value = 0;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectFormat = useCallback(() => {
    subToolContainerTranslateXSharedValue.value = withTiming(
      0,
      ANIMATION_CONFIG,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectGoBack = useCallback(() => {
    // subContainerTranslateXSharedValue.value = withTiming(0, ANIMATION_CONFIG);

    subToolContainerTranslateXSharedValue.value = withTiming(
      WINDOW_WIDTH,
      ANIMATION_CONFIG,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectHeadingSize = useCallback(() => {}, []);

  const onSelectNormalTextSize = useCallback(() => {}, []);

  const onSelectImportImage = useCallback(() => {}, []);

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', keyboardWillShowHandler);

    Keyboard.addListener('keyboardWillHide', keyboardWillHideHandler);

    return () => {
      Keyboard.removeAllListeners('keyboardWillShow');
      Keyboard.removeAllListeners('keyboardWillHide');
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <KeyboardAvoidingView behavior="position">
      <Animated.View style={[styles.container, containerAnimatedStyles]}>
        <Animated.View style={styles.subContainer}>
          <TouchableOpacity style={styles.button} onPress={onSelectImportImage}>
            <Text>Image</Text>
          </TouchableOpacity>

          <View style={styles.horizontalSpacer} />

          <TouchableOpacity style={styles.button} onPress={onSelectFormat}>
            <Text>Format</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={[styles.subToolContainer, subToolContainerAnimatedStyles]}>
          <TouchableOpacity style={styles.button} onPress={onSelectGoBack}>
            <Text>back</Text>
          </TouchableOpacity>

          <View style={styles.horizontalSpacer} />

          <TouchableOpacity style={styles.button} onPress={onSelectHeadingSize}>
            <Text>Heading</Text>
          </TouchableOpacity>

          <View style={styles.horizontalSpacer} />

          <TouchableOpacity
            style={styles.button}
            onPress={onSelectNormalTextSize}>
            <Text>Text</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default React.memo(KeyboardUtilityBar);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -HEIGHT,
    width: '100%',
    height: HEIGHT,
    backgroundColor: LIGHT_COLORS.BACKGROUND,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: LIGHT_COLORS.BLACK,
    shadowOpacity: 0.5,
  },
  subContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: LIGHT_COLORS.BACKGROUND,
  },
  subToolContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_COLORS.BACKGROUND,
  },
  button: {
    height: HEIGHT,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalSpacer: {
    width: 16,
  },
});
