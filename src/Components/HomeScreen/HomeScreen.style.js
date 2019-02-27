import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
  formBlocks: {
    // backgroundColor: '#D6E4F1',
    alignItems: 'center',
  },
  createFormButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    bottom: 0,
    right: 45,
    height: 70,
    backgroundColor: '#3F50B8',
    borderRadius: 100,
  },
  forms: {
    flex: 5,
    backgroundColor: '#D6E4F1',
  },
  crossUp: {
    backgroundColor: 'white',
    height: 20,
    width: 5,
  },
  crossFlat: {
    backgroundColor: 'white',
    height: 5,
    width: 20,
    position: 'absolute',
    left: -8,
    top: 8,
  },
});
