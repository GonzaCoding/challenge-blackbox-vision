import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  label: string;
  skin: string;
  onAnswer: (choice: string) => void;
}

const CustomButton: React.FC<Props> = ({label, skin, onAnswer}) => (
  <View>
    <TouchableOpacity style={styles.normal} onPress={() => onAnswer(label)}>
      <Text style={styles.normalText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;
