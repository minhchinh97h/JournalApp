import {View, Text} from 'react-native';
import React from 'react';
import AppCard from './AppCard';
import AppText, {TextType} from './AppText';

interface Props {}

const JournalCard = () => {
  return (
    <AppCard>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppText type={TextType.NORMAL} content={content}></AppText>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
        }}>
        <AppText type={TextType.NORMAL} content={author}></AppText>
      </View>
    </AppCard>
  );
};

export default JournalCard;
