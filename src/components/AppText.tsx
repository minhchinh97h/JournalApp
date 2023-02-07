import React, {useEffect, useState} from 'react';
import {Text, TextStyle} from 'react-native';
import {APP_TEXT_COLOR_LIST, APP_TEXT_FONT_SIZE_LIST} from '~constants/styles';

export enum TextType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  NORMAL = 'NORMAL',
  SMALL = 'SMALL',
}

interface Props {
  fontSize?: number;
  color?: string;
  type?: TextType;
  content?: string;
}

const TYPE_STYLE: {
  [x: string]: TextStyle;
} = {
  [TextType.H1]: {
    color: APP_TEXT_COLOR_LIST.H1_COLOR,
    fontSize: APP_TEXT_FONT_SIZE_LIST.H1_FONT_SIZE,
    fontWeight: 'bold',
  },
  [TextType.H2]: {
    color: APP_TEXT_COLOR_LIST.H2_COLOR,
    fontSize: APP_TEXT_FONT_SIZE_LIST.H2_FONT_SIZE,
    fontWeight: 'bold',
  },
  [TextType.H3]: {
    color: APP_TEXT_COLOR_LIST.H3_COLOR,
    fontSize: APP_TEXT_FONT_SIZE_LIST.H3_FONT_SIZE,
    fontWeight: 'bold',
  },
  [TextType.NORMAL]: {
    color: APP_TEXT_COLOR_LIST.NORMAL_COLOR,
    fontSize: APP_TEXT_FONT_SIZE_LIST.NORMAL_FONT_SIZE,
  },
  [TextType.SMALL]: {
    color: APP_TEXT_COLOR_LIST.SMALL_COLOR,
    fontSize: APP_TEXT_FONT_SIZE_LIST.SMALL_FONT_SIZE,
  },
};

const AppText = (props: Props) => {
  const {fontSize, color, type, content} = props;
  const [definedStyle, setDefinedStyle] = useState<TextStyle>();
  useEffect(() => {
    let bufferStyle: TextStyle = {};

    switch (type) {
      case TextType.H1:
        bufferStyle = TYPE_STYLE.H1;
        break;
      case TextType.H2:
        bufferStyle = TYPE_STYLE.H2;
        break;
      case TextType.H3:
        bufferStyle = TYPE_STYLE.H3;
        break;
      case TextType.NORMAL:
        bufferStyle = TYPE_STYLE.NORMAL;
        break;
      case TextType.SMALL:
        bufferStyle = TYPE_STYLE.SMALL;
        break;
      default:
        bufferStyle = TYPE_STYLE.NORMAL;
        break;
    }
    if (fontSize) {
      bufferStyle.fontSize = fontSize;
    }
    if (color) {
      bufferStyle.color = color;
    }

    setDefinedStyle(bufferStyle);
  }, [type, fontSize, color]);

  return <Text style={definedStyle}>{content}</Text>;
};

export default AppText;
