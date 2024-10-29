import React, {FC} from 'react';
import {Text} from 'react-native';
import {TypographyProps} from './types';
import {styles} from './styles';

const Typography: FC<TypographyProps> = ({
  style,
  variant = 'body',
  fontWeight = 'regular',
  ...props
}) => {
  let combinedStyles = [styles[variant], styles[fontWeight], style];

  return <Text style={combinedStyles} {...props} />;
};

export default Typography;
