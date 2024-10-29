import React from 'react';
import {View} from 'react-native';
import SVGIcon from '@shared/Components/SVGIcon';
import Typography from '@shared/Components/Typography';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import Colors from '@shared/Theme/Colors';
import styles from './styles';

const ConnectionLostSnackBar = () => {
  const {t} = UseTranslationHook();
  return (
    <View style={styles.snackbarContainer}>
      <View style={styles.snackbarWrapper}>
        <SVGIcon
          data={{
            iconName: 'wifi',
            iconColor: Colors.Base.Primary.White,
          }}
        />
        <Typography
          variant="body"
          fontWeight="bold"
          style={styles.text}
          testID="connectionFailure_txt">
          {t('ERRORS.NO_INTERNET')}
        </Typography>
      </View>
    </View>
  );
};

export default ConnectionLostSnackBar;
