import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  difficulty: 'easy | medium | hard';
}

const Difficulty: React.FC<Props> = ({difficulty}) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={[styles.rounded, difficulty === 'easy' && styles.green]} />
        <View
          style={[styles.rounded, difficulty === 'medium' && styles.yellow]}
        />
        <View style={[styles.rounded, difficulty === 'hard' && styles.red]} />
      </View>
    </View>
  );
};

export default Difficulty;
