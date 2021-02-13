import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  scoreContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    elevation: 10,
    alignItems: 'center',
  },
  scoreTextContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    height: 150,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  scoreText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 32,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
  },
});
