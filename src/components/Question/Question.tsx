import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '../CustomButton';

import {styles} from './styles';
import {QuestionType} from '../Question/type';
import Difficulty from '../Difficulty';

interface Props {
  question: QuestionType;
  index: number;
  onAnswer: (choice: string) => void;
}

const Question: React.FC<Props> = ({question, index, onAnswer}) => {
  const {
    category,
    type,
    difficulty,
    question: question_text,
    correct_answer,
    incorrect_answers,
  } = question;

  const answers: string[] = incorrect_answers.concat(correct_answer).sort();

  const getButtonContainerStyle = () =>
    type === 'multiple'
      ? styles.buttonContainerMultiple
      : styles.buttonContainerBoolean;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Question {index} of 10</Text>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionTextContainer}>
          <Text style={styles.questionText}>{question_text}</Text>
        </View>
        <Text style={styles.questionInfo}>{category}</Text>
      </View>
      <Difficulty difficulty={difficulty} />
      <View style={[styles.buttonContainer, getButtonContainerStyle()]}>
        {answers.map((answer) => (
          <CustomButton key={answer} label={answer} onPress={onAnswer} />
        ))}
      </View>
    </View>
  );
};

export default Question;
