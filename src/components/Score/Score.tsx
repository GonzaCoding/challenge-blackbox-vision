import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';

import {styles} from './styles';

interface Props {
  score: number;
  onRestart: () => void;
}

const Score: React.FC<Props> = ({score, onRestart}) => {
  let phrase = '';
  if (score === 0) {
    phrase = 'Wow...';
  } else if (score > 0 && score < 40) {
    phrase = 'Great!';
  } else {
    phrase = 'Congratulations!!!';
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{phrase}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreTextContainer}>
          <Text style={styles.scoreText}>You scored:</Text>
          <Text style={styles.scoreText}>{score} points</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton label="Restart" onPress={onRestart} />
      </View>
    </View>
  );
};

export default Score;
