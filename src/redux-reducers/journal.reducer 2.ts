import produce from 'immer';
import {JournalEntry, JournalReducer} from '~defined-types/journal.type';
import {AppReduxAction} from '~defined-types/redux.type';
import {UPDATE_APP_THEME} from '~redux-actions/app.action';

const INITIAL_STATE: JournalReducer = {
  entries: [],
};

const journalReducer = produce((draft, action: AppReduxAction) => {
  const {type, payload} = action;

  switch (type) {
    case 'journalentries/update':
      const foundIndex = draft.entries.findIndex(entry => {
        return entry._id === (payload as JournalEntry)._id;
      });
      if (foundIndex > -1) {
        draft.entries[foundIndex] = payload as JournalEntry;
      } else {
        draft.entries.push(payload as JournalEntry);
      }
      break;
  }
}, INITIAL_STATE);

export default journalReducer;
