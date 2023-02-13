import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppText, {TextType} from './AppText';

interface Props {
  height?: number;
  color?: string;
  title?: string;
  content?: string;
}

const styles = StyleSheet.create({
  cardStyle: {
    height: 90,
    width: '85%',
    paddingTop: 20,
    paddingLeft: 20,
    backgroundColor: '#61BECB',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
});

const AppCard = (props: Props) => {
  const {height, color, title, content} = props;

  return (
    <View style={styles.cardStyle}>
      <View style={{flexDirection: 'column'}}>
        {title && <AppText content={title} type={TextType.H1} />}

        <AppText content={content} type={TextType.NORMAL} />
      </View>
    </View>
  );
};

export default AppCard;
