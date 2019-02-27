import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formName: {
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'flex-start',
    color: 'black',
    margin: 10,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  creationDate: {
    fontSize: 18,
    alignSelf: 'flex-end',
    margin: 10,
    color: 'black',
  },
  formBlock: {
    height: 150,
    width: 300,
    backgroundColor: 'white',
    margin: 30,
  },
  innerFormBlock: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
