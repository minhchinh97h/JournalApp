import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {LIGHT_COLORS} from '~constants/styles';

interface Props {
  icon?: React.ReactNode;

  onPress?: () => void;
}

const BottomTabBarButton = ({icon, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.screenButton} onPress={onPress}>
      {icon}
    </TouchableOpacity>
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
