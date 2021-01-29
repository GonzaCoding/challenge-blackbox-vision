import React from 'react';
import {View, Button} from 'react-native';

const CustomButton = ({label}) => {
  return (
    <View>
      <Button title={label} />
    </View>
  );
};

export default CustomButton;
