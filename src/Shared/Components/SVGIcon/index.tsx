import React, {FC} from 'react';
import SVGs from '@shared/Components/IndexingSVGs';
import {SVGIconProps} from './types';

const SVGIcon: FC<SVGIconProps> = ({data}) => {
  const {iconName, iconColor, iconSize, testID} = data;
  const SVG = SVGs[iconName];

  return (
    <SVG
      testID={testID}
      fontSize={iconSize}
      fill={iconColor ?? 'transparent'}
    />
  );
};

export default SVGIcon;
