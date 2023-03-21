import {JournalEntry} from '~defined-types/journal.type';

export const updateJournalEntry = (payload: JournalEntry) => ({
  type: 'journalentries/update',
  payload,
});
