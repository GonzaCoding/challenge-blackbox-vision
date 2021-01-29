import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';

const Question = () => {
  return (
    <View>
      <View>
        <Text>Question 1 of 10</Text>
      </View>
      <View>
        <Text>What is it?</Text>
      </View>
      <View>
        <CustomButton label="Option 11" />
        <CustomButton label="Option 22" />
        <CustomButton label="Option 3" />
        <CustomButton label="Option 4" />
      </View>
    </View>
  );
};

export default Question;
