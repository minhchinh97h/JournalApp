import React from 'react';
import {View} from 'react-native';
import AppText, {TextType} from '~components/AppText';
import AppCard from './AppCard';

interface Props {
  content: string;
  author: string;
}

const QuoteCard = (props: Props) => {
  const {content, author} = props;

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

export default QuoteCard;
