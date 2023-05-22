import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {LIGHT_COLORS} from '~constants/styles';

interface Props {
  icon?: React.ReactNode;

  onPress?: () => void;
}

const BottomTabBarButton = ({icon, onPress}: Props) => {
  return (
    <Pressable style={styles.screenButton} onPress={onPress}>
      {icon}
    </Pressable>
  );
};

export default React.memo(BottomTabBarButton);

const styles = StyleSheet.create({
  screenButton: {
    width: 48,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_COLORS.WHITE,
  },
});
