import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  label: string;
  onPress: (param: any) => void;
}

const CustomButton: React.FC<Props> = ({label, onPress}) => (
  <View>
    <TouchableOpacity style={styles.normal} onPress={() => onPress(label)}>
      <Text style={styles.normalText}>{label}</Text>
    </TouchableOpacity>
  </View>
);

export default CustomButton;
