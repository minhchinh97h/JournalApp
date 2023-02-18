import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AppText, {TextType} from '~components/AppText';
import PromptCard from '~components/PromptCard';
import QuoteCard from '~components/QuoteCard';

const JournalScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <PromptCard
          content={"What I'm most excited about today ____"}></PromptCard>
        <QuoteCard
          content={
            "We don't rise to the level of our expectations, we fall to the level of our training."
          }
          author={'Archilochus'}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(JournalScreen);
