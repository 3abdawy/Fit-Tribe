import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Typography from '../Typography';
import Colors from '@shared/Theme/Colors';

interface ICircledCount {
  count: number;
  type: 'MESSAGE' | 'CARD';
  testId?: string;
}
const CircledCount = ({count, type, testId}: ICircledCount) => {
  const TYPES = {
    MESSAGE: {
      backgroundColor: Colors.Brand.Primary.Normal,
      color: Colors.Base.Primary.White,
    },
    CARD: {
      backgroundColor: Colors.Base.Primary.Light,
      color: Colors.Base.Primary.Black,
    },
  };
  return (
    <View
      style={{
        ...styles.countContainer,
        backgroundColor: TYPES[type]?.backgroundColor,
      }}>
      <Typography
        variant="body"
        fontWeight="bold"
        testID={testId}
        style={{
          color: TYPES[type]?.color,
        }}>
        {count}
      </Typography>
    </View>
  );
};
export default CircledCount;
