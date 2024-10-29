import React, {FC} from 'react';
import {Modal, View, TouchableWithoutFeedback} from 'react-native';
import {BottomSheetProps} from './types';
import styles from './styles';

const BottomSheet: FC<BottomSheetProps> = ({visible, onClose, children}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};
export default BottomSheet;
