import React from 'react';
import {View, Text} from 'react-native';
import AppText, {TextType} from '~components/AppText';
import AppCard from './AppCard';

interface Props {
  title?: string;
}

const DiscoverCard = (props: Props) => {
  const {title} = props;

  return (
    <AppCard>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AppText type={TextType.NORMAL} content={title}></AppText>
      </View>
    </AppCard>
  );
};

export default DiscoverCard;
