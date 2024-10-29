import React, {FC} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';
import {CustomButtonProps} from './types';
import SVGIcon from '@shared/Components/SVGIcon';
import Typography from '@shared/Components/Typography';
import Colors from '@shared/Theme/Colors';

const CustomButton: FC<CustomButtonProps> = ({data, config, eventHandlers}) => {
  const {text, textVariant, textColor, testID} = data;
  const {
    isWithIcon,
    isLoading,
    isDisabled,
    isDisabledWithBackground,
    isDisabledWithTransparentBackground,
    customButtonStyle,
    customTextStyle,
  } = config;
  const {onPress} = eventHandlers;

  const applyDisableOrNormalBackgrounds = () => {
    if (isDisabledWithBackground) return styles.customButtonDisabled;
    else if (isDisabledWithTransparentBackground)
      return styles.customButtonTransparentDisabled;
    else return null;
  };
  // isDisabled ? styles.customButtonDisabled : null,

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.customButtonContainer,
        customButtonStyle,
        applyDisableOrNormalBackgrounds(),
      ]}
      testID={testID}>
      {isWithIcon && !isLoading?.loading && (
        <SVGIcon
          data={{
            iconName: isWithIcon.iconName,
            iconColor: isWithIcon.iconColor,
            iconSize: isWithIcon.iconSize,
          }}
        />
      )}
      <Typography
        style={[
          {color: isDisabled ? Colors.Base.Primary.Normal : textColor},
          customTextStyle,
        ]}
        variant={textVariant || 'button'}>
        {text}
      </Typography>

      {isLoading?.loading && (
        <ActivityIndicator color={isLoading.loadingIndicatorColor} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
