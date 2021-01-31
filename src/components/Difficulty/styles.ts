import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'black',
    width: '40%',
    borderRadius: 10,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 10,
  },
  rounded: {
    zIndex: 2,
    backgroundColor: 'gray',
    height: 28,
    width: 28,
    borderRadius: 20,
    elevation: 10,
  },
  red: {
    backgroundColor: 'red',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  green: {
    backgroundColor: 'green',
  },
});
