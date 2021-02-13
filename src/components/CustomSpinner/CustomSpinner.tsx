import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const CustomButton: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="red" />
  </View>
);

export default CustomButton;
