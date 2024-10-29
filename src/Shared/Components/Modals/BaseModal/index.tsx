import React, {FC, ReactNode} from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import styles from './styles';
import SVGIcon from '@shared/Components/SVGIcon';
import Typography from '@shared/Components/Typography';
import CustomButton from '@shared/Components/Buttons/CustomButton';

interface BaseModalProps {
  data: {
    iconName?: string;
    iconColor?: string;
    title?: string;
    message?: string;
    btnText?: string;
  };
  config: {
    withBtn?: boolean;
  };
  eventHandlers: {
    onBtnPress?: () => void;
  };
  children?: ReactNode;
}

const BaseModal: FC<BaseModalProps> = ({
  data,
  config,
  eventHandlers,
  children,
}) => {
  const {iconName, iconColor, title, message, btnText} = data;
  const {withBtn} = config;
  const {onBtnPress} = eventHandlers;

  const renderIcon = () =>
    iconName && (
      <View>
        <SVGIcon data={{iconName, iconColor}} />
      </View>
    );

  const renderTypography = (text: string, style?: StyleProp<TextStyle>) =>
    text && (
      <Typography variant="body" fontWeight="bold" style={style ? style : null}>
        {text}
      </Typography>
    );

  const renderCustomButton = () =>
    withBtn &&
    btnText &&
    onBtnPress && (
      <CustomButton
        data={{text: btnText}}
        config={{
          customButtonStyle: styles.customButton,
          customTextStyle: styles.customBtnTitle,
        }}
        eventHandlers={{onPress: () => onBtnPress()}}
      />
    );

  return (
    <View style={styles.baseModalContainer}>
      <View style={styles.baseModalWrapper}>
        {!children ? (
          <View style={styles.baseModalDetailsContainer}>
            {renderIcon()}
            <View style={styles.typographyContainer}>
              {renderTypography(String(title), styles.title)}
              {renderTypography(String(message))}
            </View>
            {renderCustomButton()}
          </View>
        ) : (
          children
        )}
      </View>
    </View>
  );
};

export default BaseModal;
