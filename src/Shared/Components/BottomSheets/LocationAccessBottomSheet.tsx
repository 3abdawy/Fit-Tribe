import React from 'react';
import SVGIcon from '../SVGIcon';
import VerticalSpace from '../VerticalSpace';
import Typography from '../Typography';
import Colors from '@shared/Theme/Colors';
import CustomButton from '../Buttons/CustomButton';
import styles from './styles';
import {UseTranslationHook} from '@shared/Hooks/UseTranslationHook';
import {openSettings} from '@shared/Utils/Location';

const LocationAccessBottomSheet = () => {
  const {t} = UseTranslationHook();
  return (
    <>
      <SVGIcon data={{iconName: 'location', iconSize: 60}} />
      <VerticalSpace height={18} />
      <Typography variant="body" style={styles.modalText}>
        {t('LOCATION_ACCESS_SHEET.TITLE')}
      </Typography>
      <CustomButton
        data={{
          text: t('LOCATION_ACCESS_SHEET.ACTION'),
        }}
        config={{
          customTextStyle: {
            color: Colors.Base.Primary.White,
          },
          customButtonStyle: styles.buttonStyle,
        }}
        eventHandlers={{onPress: openSettings}}
      />
    </>
  );
};
export default LocationAccessBottomSheet;
