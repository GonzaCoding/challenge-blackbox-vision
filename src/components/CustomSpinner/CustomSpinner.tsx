import React from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {styles} from './styles';

const CustomButton: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="red" />
    <Text style={styles.spinnerText}>Loading...</Text>
  </View>
);

export default CustomButton;
