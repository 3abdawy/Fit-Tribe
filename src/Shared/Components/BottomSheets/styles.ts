import {StyleSheet} from 'react-native';
import Colors from '@shared/Theme/Colors';

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    backgroundColor: Colors.Base.Primary.Light,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  backdrop: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.Base.Primary.Dark,
    opacity: 0.4,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 6,
  },
  buttonStyle: {
    backgroundColor: Colors.Brand.Primary.Normal,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: '100%',
    marginTop: 16,
  },
});

export default styles;
