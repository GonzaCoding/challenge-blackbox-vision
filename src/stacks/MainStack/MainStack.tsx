import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Question from '../../components/Question';
import {QuestionType} from '../../components/Question/type';
import {fetchQuiz} from '../../services/QuizService';

const MainStack = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quiz, setQuiz] = useState<QuestionType[]>([]);

  useEffect(() => {
    fetchQuiz().then((questions) => {
      setQuiz(questions);
    });
  }, []);

  if (quiz.length === 0) {
    return null;
  }

  return (
    <View>
      <Question question={quiz[currentQuestion]} index={currentQuestion + 1} />
    </View>
  );
};

export default MainStack;
