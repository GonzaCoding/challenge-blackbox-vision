import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';

import {styles} from './styles';

interface Props {
  score: number;
  //onRestart: () => void;
}

const Score: React.FC<Props> = ({score}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>You scored:</Text>
      </View>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreTextContainer}>
          <Text style={styles.scoreText}>{score} points</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Text>Restart</Text>
      </View>
    </View>
  );
};

export default Score;
