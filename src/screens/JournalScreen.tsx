import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getJournalEntry as getJournalEntries} from '~redux-selectors/journal-entry.selector';
import AppText, {TextType} from '~components/AppText';
import PromptCard from '~components/PromptCard';
import QuoteCard from '~components/QuoteCard';
import {JournalEntry} from '~defined-types/journal.type';

const JournalScreen = () => {
  const JournalEntries = useSelector(getJournalEntries);
  if (JournalEntries) {
    console.log(JournalEntries.length);
  }

  const renderJournalEntry = (obj: {item: JournalEntry; index: number}) => {
    return <QuoteCard content={obj.item.text} author={'Archilochus1'} />;
  };

  const keyExtractor = (item: JournalEntry) => item._id;

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <PromptCard
          content={"What I'm most excited about today ____"}></PromptCard>

        <FlatList
          style={{width: '100%'}}
          contentContainerStyle={{alignItems: 'center'}}
          data={JournalEntries}
          renderItem={renderJournalEntry}
          keyExtractor={keyExtractor}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(JournalScreen);
