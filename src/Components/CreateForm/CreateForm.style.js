import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  menuIcon: {
    flex: 1,
    justifyContent: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    color: 'white',
    marginLeft: 15,
  },
  iconCircleMiddle: {
    backgroundColor: 'white',
    width: 5,
    height: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  iconCircleEdge: {
    backgroundColor: 'white',
    width: 5,
    height: 5,
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  addFieldButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#3F50B8',
  },
  formNameAndField: {
    flex: 1,
    color: '#3F50B8',
  },
  outterMostView: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
