import {TextProps} from 'react-native';

export interface TypographyProps extends TextProps {
  variant?: 'title' | 'body' | 'caption' | 'button';
  fontWeight?: 'regular' | 'bold' | 'semiBold';
}
