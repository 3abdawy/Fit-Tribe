import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native';

export type IsLoading =
  | {
      loading: true;
      loadingIndicatorColor: string;
    }
  | {
      loading: false;
      loadingIndicatorColor?: never;
    };

export interface CustomButtonProps extends TouchableOpacityProps {
  data: {
    text: string;
    textVariant?: 'body' | 'caption' | 'title';
    textColor?: string;
    testID?: string;
  };
  config: {
    isWithIcon?: {iconName: string; iconColor: string; iconSize: number};
    isLoading?: IsLoading;
    isDisabled?: boolean;
    isDisabledWithBackground?: boolean;
    isDisabledWithTransparentBackground?: boolean;
    customButtonStyle?: StyleProp<TextStyle>;
    customTextStyle?: StyleProp<TextStyle>;
  };
  eventHandlers: {
    onPress: () => void;
  };
}
