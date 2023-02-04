import React, {useEffect, useState} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

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
}

const AppText = (props: Props) => {
  const {fontSize, color, type} = props;
  const [definedStyle, setDefinedStyle] = useState<StyleProp<TextStyle>>({
    color: '#EBEBEB',
    fontSize: 16,
  });
  useEffect(() => {
    switch (type) {
      case TextType.H1:
        setDefinedStyle({color: '#EBEBEB', fontSize: 28, fontWeight: 'bold'});
        break;
      case TextType.H2:
        setDefinedStyle({color: '#EBEBEB', fontSize: 24, fontWeight: 'bold'});
        break;
      case TextType.H3:
        setDefinedStyle({color: '#EBEBEB', fontSize: 20, fontWeight: 'bold'});
        break;
      case TextType.NORMAL:
        setDefinedStyle({color: '#EBEBEB', fontSize: 16});
        break;
      case TextType.SMALL:
        setDefinedStyle({color: '#EBEBEB', fontSize: 14});
        break;
    }
  }, [type]);

  return <Text style={definedStyle}>Helu</Text>;
};

export default AppText;
