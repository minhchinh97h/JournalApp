import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getJournalEntry as getJournalEntries} from '~redux-selectors/journal-entry.selector';
import AppText, {TextType} from '~components/AppText';
import PromptCard from '~components/PromptCard';
import QuoteCard from '~components/QuoteCard';

const JournalScreen = () => {
  const JournalEntries = useSelector(getJournalEntries);
  if (JournalEntries) {
    console.log(JournalEntries.length);
  }

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <PromptCard
          content={"What I'm most excited about today ____"}></PromptCard>
        {JournalEntries.map((item, index) => (
          <QuoteCard key={index} content={item.text} author={'Archilochus'} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default React.memo(JournalScreen);
