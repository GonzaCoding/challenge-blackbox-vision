import {QuestionType} from '../components/Question/type';
import {decode} from 'html-entities';

export function fetchQuiz(): Promise<QuestionType[]> {
  return new Promise<QuestionType[]>((resolve, reject) => {
    try {
      fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((data) => {
          let questions: QuestionType[] = [];

          data.results.map((results: QuestionType) => {
            let question: QuestionType = {
              category: decode(results.category),
              type: results.type,
              difficulty: decode(results.difficulty),
              question: decode(results.question),
              correct_answer: decode(results.correct_answer),
              incorrect_answers: results.incorrect_answers.map((answer) =>
                decode(answer),
              ),
            };

            questions.push(question);
          });
          resolve(questions);
        });
    } catch (error) {
      console.warn(error);
      reject(error);
    }
  });
}
