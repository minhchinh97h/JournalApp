import React from 'react';
import {View} from 'react-native';
import AppText, {TextType} from '~components/AppText';
import AppCard from './AppCard';

interface Props {
  title?: string;
  content: string;
}

const PromptCard = (props: Props) => {
  const {content} = props;
  const title = "Today's Prompt";

  return (
    <AppCard>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <AppText type={TextType.H2} content={title}></AppText>
        <AppText type={TextType.NORMAL} content={content}></AppText>
      </View>
    </AppCard>
  );
};

export default PromptCard;
