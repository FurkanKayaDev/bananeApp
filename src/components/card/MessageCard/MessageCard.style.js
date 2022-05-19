import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: colors.darkgreen,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 15,
    marginHorizontal: 3,
  },
  content_text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15,
    marginHorizontal: 10,
  },
  headerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  date_text: {
    fontStyle: 'italic',
    color: 'white',
  },

  dislike_count_container: {
    backgroundColor: colors.darkgreen,
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  dislike_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  dislike_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
  dislike_text: {
    color: colors.darkgreen,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'flex-end',
    marginBottom: 5,
    marginHorizontal: 3,
  },
});
