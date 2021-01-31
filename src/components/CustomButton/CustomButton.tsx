import React from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const CustomButton = ({label, skin}) => {
  return (
    <View>
      <TouchableOpacity style={styles.normal}>
        <Text style={styles.normalText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
