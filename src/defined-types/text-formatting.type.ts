export interface TextFormattingReducer {
  content: string;
  formattedArray: FormattedText[];
  selection: TextSelection | undefined;
  selectedTextSize: TextSize | undefined;
  selectedTextStyles: TextStyle[];
}

export interface TextSelection {
  start: number;
  end: number;
}

export enum TextSize {
  H1 = 'H1',
  NORMAL = 'NORMAL',
}

export enum TextStyle {
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  CROSSED = 'CROSSED',
}

export interface FormattedText {
  end: number;
  size?: TextSize;
  styles?: TextStyle[];
  image?: unknown;
}

export interface FormattedCharacter {
  index: number;
  size?: TextSize;
  styles?: TextStyle[];
  image?: unknown;
}
