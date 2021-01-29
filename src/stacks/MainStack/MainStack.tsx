import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Question from '../../components/Question';
import {fetchQuiz} from '../../services/QuizService';

const MainStack = () => {
  useEffect(() => {
    fetchQuiz().then((questions) => {
      console.warn(questions);
    });
  }, []);

  return (
    <View>
      <Question />
    </View>
  );
};

export default MainStack;
