import Colors from '@shared/Theme/Colors';
import Common from '@shared/Styles';
import {StyleSheet, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: Colors.Brand.Primary.Light,
    ...(Common.styles.colCenterContent as ViewStyle),
  },
});

export default styles;
