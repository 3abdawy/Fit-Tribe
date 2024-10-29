import Colors from '@shared/Theme/Colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  customButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 8,
  },
  customButtonDisabled: {
    backgroundColor: Colors.Base.Primary.Light,
  },
  customButtonTransparentDisabled: {
    backgroundColor: "transparent",
  },
});
