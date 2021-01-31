import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: '100%',
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
  questionContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    elevation: 10,
  },
  questionTextContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 32,
  },
  questionInfo: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'space-around',
  },
  buttonContainerMultiple: {
    marginTop: 10,
    height: 250,
  },
  buttonContainerBoolean: {
    marginTop: 20,
    height: 200,
  },
});
