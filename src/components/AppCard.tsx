import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppText, {TextType} from './AppText';

interface Props {
  children?: ReactNode;
  height?: number;
  color?: string;
  title?: string;
  content?: string;
}

const styles = StyleSheet.create({
  cardStyle: {
    width: '85%',
    padding: 16,
    backgroundColor: '#61BECB',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    margin: 16,
  },
});

const AppCard = ({children}: Props) => {
  return (
    <View style={styles.cardStyle}>
      <View style={{flexDirection: 'column', flex: 1}}>{children}</View>
    </View>
  );
};

export default AppCard;
