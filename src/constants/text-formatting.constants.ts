import {TextSize, TextStyle} from '~defined-types/text-formatting.type';

export const TEXT_FORMATTING_TAG: {[x: string]: string} = {
  [TextSize.H1]: '<h1>',
  [TextStyle.BOLD]: '<bo>',
  [TextStyle.ITALIC]: '<it>',
  [TextStyle.CROSSED]: '<cr>',
};
