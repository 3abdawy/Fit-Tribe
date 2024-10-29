import React from 'react';
import {View} from 'react-native';
import SVGIcon from '@shared/Components/SVGIcon';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.loadingContainer}>
      <SVGIcon data={{iconName: 'wifi'}} />
    </View>
  );
};

export default Loading;
