import {createSelector} from 'reselect';
import {RootReducer} from '~defined-types/redux.type';

const getJournalEntryReducer = (state: RootReducer) => state.journalReducer;

export const getJournalEntryFirstItem = createSelector(
  getJournalEntryReducer,
  r => {
    return r.entries[0];
  },
);

export const getJournalEntry = createSelector(getJournalEntryReducer, r => {
  return r.entries;
});
