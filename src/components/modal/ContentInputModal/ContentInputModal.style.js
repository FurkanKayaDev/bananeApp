import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: deviceSize.height / 3,
  },

  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input_container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  input_text: {
    color: 'gray',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    flex: 1,
    alignItems: 'flex-start',
    textAlign: 'center',
  },
});
