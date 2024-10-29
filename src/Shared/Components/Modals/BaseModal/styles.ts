import Colors from '@shared/Theme/Colors';
import Common from '@shared/Styles';
import {I18nManager, StyleSheet, ViewStyle} from 'react-native';

export default StyleSheet.create({
  baseModalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(124,124,124, 0.8)',
    paddingHorizontal: 16,
    ...(Common.styles.colCenterContent as ViewStyle),
  },
  baseModalWrapper: {
    padding: 20,
    width: '100%',
    backgroundColor: Colors.Base.Primary.White,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  baseModalDetailsContainer: {
    ...(Common.styles.colCenterContent as ViewStyle),
  },
  typographyContainer: {
    marginVertical: 10,
    ...(Common.styles.colCenterContent as ViewStyle),
  },
  title: {
    color: Colors.Base.Primary.Dark,
    fontSize: 20,
  },
  customButton: {
    backgroundColor: Colors.Brand.Primary.Normal,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 56,
    marginTop: 16,
    width: '100%',
  },
  customBtnTitle: {
    color: Colors.Base.Primary.White,
    fontFamily: 'NotoSansArabic-SemiBold',
  },
});
