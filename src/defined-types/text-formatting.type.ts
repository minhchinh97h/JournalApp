export interface TextFormattingReducer {
  content: string;
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
}

export enum TextStyle {
  BOLD = 'BOLD',
  ITALIC = 'ITALIC',
  CROSSED = 'CROSSED',
}

export interface FormattedText {
  content: string;
  size?: TextSize;
  styles?: TextStyle[];
  image?: unknown;
}
