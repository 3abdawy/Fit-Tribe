import {StyleSheet, ViewStyle} from 'react-native';
import Colors from '../../Theme/Colors';
import Common from '@shared/Styles';

export default StyleSheet.create({
  snackbarContainer: {
    ...(Common.styles.rowSpaceBetweenAlignItems as ViewStyle),
    paddingHorizontal: 24,
    backgroundColor: Colors.System.Error.Normal,
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    right: 0,
    left: 0,
    height: 66,
  },
  text: {
    color: Colors.Base.Primary.White,
    fontFamily: 'Cairo-Regular',
    marginHorizontal: 10,
  },
  snackbarWrapper: {
    ...(Common.styles.rowAlignItems as ViewStyle),
  },
});
