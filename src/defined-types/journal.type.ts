export interface JournalReducer {
  entries: JournalEntry[];
}

export enum EntryType {
  SHORT = 'short',
  LONG = 'long',
}

export enum EntryMood {
  VERY_HAPPY = 'veryHappy',
  HAPPY = 'happy',
  NEUTRAL = 'neutral',
  SAD = 'sad',
  VERY_SAD = 'verySad',
}

export interface JournalEntry {
  _id: string;
  userId: string;
  templateId?: string;
  createdDate: Date;
  lastEditedDate: Date;
  title: string;
  text: string;
  photo?: number[];
  entryType: EntryType;
  entryMood?: EntryMood;
}
