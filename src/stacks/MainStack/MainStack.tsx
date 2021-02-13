import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Question from '../../components/Question';
import Score from '../../components/Score';
import {QuestionType} from '../../components/Question/type';
import {fetchQuiz} from '../../services/QuizService';

const MainStack = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [quiz, setQuiz] = useState<QuestionType[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (currentQuestion === 0) {
      getQuiz();
    }
  }, [currentQuestion]);

  const getQuiz = () => {
    fetchQuiz().then((questions) => {
      setCurrentQuestion(0);
      setScore(0);
      setQuiz(questions);
    });
  };

  const onAnswer = (choice: string) => {
    //calculate score
    if (quiz[currentQuestion].correct_answer === choice) {
      let points: number = 0;
      quiz[currentQuestion].type === 'multiple' ? (points = 10) : (points = 5);

      setScore((prevScore) => prevScore + points);
    }

    // set new question or show score
    if (currentQuestion < 10) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      //console.warn(score);
    }
  };

  if (quiz.length === 0) {
    return null;
  }

  if (currentQuestion === 10) {
    return <Score score={score} onRestart={getQuiz} />;
  }

  return (
    <View>
      <Question
        question={quiz[currentQuestion]}
        index={currentQuestion + 1}
        onAnswer={onAnswer}
      />
    </View>
  );
};

export default MainStack;
