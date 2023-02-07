enum EntryType{
    SHORT = 'short',
    LONG = 'long'
}

enum EntryMood{
    VERY_HAPPY = 'veryHappy',
    HAPPY = 'happy',
    NEUTRAL = 'neutral',
    SAD = 'sad',
    VERY_SAD = 'verySad',
}

export interface JournalEntry {
    _id?: string,
    userId: string,
    templateId?: string,
    createdDate: Date, 
    lastEditedDate: Date,
    title: string,
    text: number,
    photo?: number[],
    entryType: EntryType,
    entryMood?: EntryMood,
}